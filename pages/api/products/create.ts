const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { title, price, image, id } = req.body;
      const product = await stripe.products.create({
        id,
        name: title,
        default_price_data: {
          currency: "USD",
          unit_amount_decimal: price,
        },
        images: [image],
      });
      res.status(200).json(product);
    } catch (err: any) {
      console.log(err.message);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
