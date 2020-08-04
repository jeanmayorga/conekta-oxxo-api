import express, { Request, Response } from "express";
import { ConecktaApi } from "../../libs/ConektaApi";
import { config } from "../../utils/config";

const route = express.Router();

/*
 * GET orders by order_id
 */
route.get("/order/:order_id", async (req: Request, res: Response) => {
  const conekta = new ConecktaApi({
    api_key: config.X_CONEKTA_PRIVATE,
    api_version: "2.0.0",
    locale: "es",
  });
  const order_id = req.params.order_id as string;

  if (!order_id) {
    return res.status(409).json({
      data: "You must send a order_id in paramas /order/${order_id}.",
    });
  }

  const order = await conekta.getOrder({
    order_id,
  });

  return res.status(200).json({ data: order });
});

/*
 * POST to create order
 */
route.post("/createOrder", async (req: Request, res: Response) => {
  const conekta = new ConecktaApi({
    api_key: config.X_CONEKTA_PRIVATE,
    api_version: "2.0.0",
    locale: "es",
  });

  const line_items = req.body.line_items;
  const customer_info = req.body.customer_info;

  if (!line_items) {
    return res.status(409).json({ data: "You must send a line items." });
  }
  if (!customer_info) {
    return res.status(409).json({ data: "You must send a customer_info." });
  }

  const order = await conekta.createOrder({
    line_items: line_items,
    customer_info: customer_info,
    currency: "USD",
  });

  return res.status(200).json({ data: order });
});

export { route as conektaApi };
