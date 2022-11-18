import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export default async function createOrder(req: Request, res: Response) {
  const { table, products } = req.body;
  const orderData = {
    table,
    products: products ? JSON.parse(products) : [],
  };

  const order = await Order.create(orderData);

  res.status(201).json(order);
}
