export interface ConektaOrder {
  _id: string;
  creator_id: string;
  user_id: string;
  created_at: string;
}

export interface ConektaCustomerInfo {
  name: string;
  email: string;
  phone: string;
}

export interface ConektaOrderResponse {
  id: string;
  object: string;
  status: string;
  amount: number;
  fee: number;
  reference_id: string;
  order_id: string;
  livemode: false;
  created_at: number;
  currency: string;
  payment_method: {
    service_name: string;
    object: string;
    type: string;
    expires_at: number;
    store_name: string;
    reference: string;
  };
}
