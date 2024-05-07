import { Request, Response } from 'express';
import { FinishOrderService } from '../../services/order/finish-order/finishOrder.services';
import { FinishOrderProps } from '../../services/order/finish-order/protocols';

export class FinishOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body as FinishOrderProps;
    const finishOrderService = new FinishOrderService();
    
    const order = finishOrderService.execute({ order_id });

    return res.json(order);
  }
}
