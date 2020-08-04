// import CreateError from "http-errors";
import conekta from "conekta";
import { ConektaOrderResponse } from "../api/conekta/interface";

export class ConecktaApi {
  conekta: typeof conekta;

  constructor(options: {
    api_key: string;
    api_version: string;
    locale?: string;
  }) {
    this.conekta = conekta;
    this.conekta.api_key = options.api_key;
    this.conekta.api_version = options.api_version;
    this.conekta.locale = options.locale ? options.locale : "en";
  }

  async createOrder(options: {
    line_items: {
      name: string;
      unit_price: number;
      quantity: number;
    }[];
    currency: string;
    customer_info: {
      name: string;
      email: string;
      phone: string;
    };
  }) {
    try {
      let order = await this.conekta.Order.create({
        line_items: options.line_items,
        currency: options.currency,
        customer_info: options.customer_info,
        charges: [
          {
            payment_method: {
              type: "oxxo_cash",
            },
          },
        ],
      });

      const orderResponse = order.charges.toArray()[0] as ConektaOrderResponse;

      return orderResponse;
    } catch {
      console.log("Error creating order:");

      return { error: "Error on create order" };
    }
  }

  async getOrder(options: { order_id: string }) {
    try {
      const order = await this.conekta.Order.find(options.order_id);

      return order.toObject();
    } catch {
      console.log("Error getting order:");

      return { error: "The order do not exists" };
    }
  }

  /*
   * You can add all conekta methods as you want
   */
}
