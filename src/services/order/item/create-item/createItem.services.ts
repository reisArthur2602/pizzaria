import { prismaClient } from '../../../../database/prismaClient';
import {
  CreateItemData,
  CreateItemProps,
  ICreateItemService,
} from './protocols';

export class CreateItemService implements ICreateItemService {
  
  async execute(data: CreateItemProps): Promise<CreateItemData> {
    const item = await prismaClient.item.create({
      data: {
        product_id: data.product_id,
        order_id: data.order_id,
        amount: data.amount,
      }
    });
    return item;
  }
}
