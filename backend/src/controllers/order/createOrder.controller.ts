import { Request, Response } from 'express';
import { CreateOrderService } from '../../services/order/create-order/createOrder.services';
import { CreateOrderProps } from '../../services/order/create-order/protocols';

export class CreateOrderController {
  async handle(req: Request, res: Response) {
    
    const { table, name } = req.body as CreateOrderProps;

    const createOrderService = new CreateOrderService();
    const order = await createOrderService.execute({ table, name });

    return res.json(order);
  }
}
