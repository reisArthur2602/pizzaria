import { Request, Response } from 'express';
import { DetailsItemService } from '../../../services/order/item/details-item/detailsItem.services';

export class DetailsItemController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;
    const detailsItemService = new DetailsItemService();
    const items = await detailsItemService.execute({ order_id });

    return res.json(items);
  }
}
