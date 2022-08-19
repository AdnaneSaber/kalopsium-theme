import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { product, productPage } = req.body;
      const { price, id } = product;
      const { default_price } = await stripe.products.retrieve(id.toString());
      console.log(default_price);
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: default_price,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin + productPage}/?success=true`,
        cancel_url: `${req.headers.origin + productPage}/?canceled=true`,
      });
      res.status(200).json(session.url);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
