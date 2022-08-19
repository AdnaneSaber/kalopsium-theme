import { Prisma, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { respTemp } from "@Utils";

const prisma = new PrismaClient();
const createUser = async (req: NextApiRequest) => {
  const { user } = JSON.parse(req.body);
  const userExists = await prisma.user.findMany({
    where: { email: user.email },
  });
  if (userExists.length > 0) {
    return respTemp({}, false, "User with this email already exists");
  }
  const newUser = await prisma.user.create({
    data: {
      ...user,
    },
  });
  return respTemp(newUser, true, "User created successfully");
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const user = await createUser(req.body);
    res.status(200).json(user);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
