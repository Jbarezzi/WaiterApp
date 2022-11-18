import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export default async function changeOrderStatus(req: Request, res: Response) {
  const { orderId } = req.params;
  const { status } = req.body;
  const statusIsValid = ['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status);

  if(statusIsValid === false) {
    return res.status(400).json({
      'error': 'Wrong Status'
    });
  }
  await Order.findByIdAndUpdate(orderId, { status });

  res.sendStatus(204);
}
