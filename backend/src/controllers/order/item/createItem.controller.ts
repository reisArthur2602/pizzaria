import { Request, Response } from 'express';
import { CreateItemService } from '../../../services/order/item/create-item/createItem.services';
import { CreateItemProps } from '../../../services/order/item/create-item/protocols';

export class CreateitemController {
  async handle(req: Request, res: Response) {
    const { order_id, product_id, amount } = req.body as CreateItemProps;
    const createItemService = new CreateItemService();
    const item = await createItemService.execute({ order_id, product_id, amount });
    return res.json(item);
  }
}
