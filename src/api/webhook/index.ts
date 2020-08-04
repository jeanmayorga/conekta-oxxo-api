import express, { Request, Response } from "express";
import { ConecktaApi } from "../../libs/ConektaApi";
import { config } from "../../utils/config";

const route = express.Router();

/*
 * POST Webhook
 */
route.get("/webhook", async (req: Request, res: Response) => {
  const data = typeof req.body == "string" ? JSON.parse(req.body) : req.body;
  const type = data?.type;

  if (type === "order.paid") {
    const order_id = data.data.object.id;

    const conekta = new ConecktaApi({
      api_key: config.X_CONEKTA_PRIVATE,
      api_version: "2.0.0",
      locale: "es",
    });

    /*
     * Verify if order exists
     */
    const order = await conekta.getOrder({ order_id });
    if (!order) {
      return res.status(404).json({
        data: `Order ${order_id} do not exist`,
      });
    }

    /*
     * Here you can add your logic
     */
    return res.json({
      data: "success",
    });
  }

  return res.json({
    data: "webhook works!",
  });
});

export { route as conektaWebhookApi };
