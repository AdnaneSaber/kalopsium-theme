// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.body) {
    res.status(400).json({ message: "No body found" });
    return;
  }
  const { email, password, duration } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Email and password are required" });
    return;
  }
  await prisma.user
    .findMany({
      where: { email },
    })
    .then((users) => {
      const user = users[0];
      if (users.length === 0) {
        res.status(400).json({ message: "User not found" });
        return;
      }
      if (user.password !== password) {
        res.status(400).json({ message: "Password is incorrect" });
        return;
      }
      const renderedUser = {
        ...user,
        password: undefined,
      };
      const token = jwt.sign(renderedUser, process.env.JWT_SECRET as string, {
        expiresIn: `${duration}d`,
      });
      res.status(200).json({ token });
      return;
    })
    .finally(() => {
      prisma.$disconnect();
    })
    .catch((err) => {
      console.log(err);
    });
}
