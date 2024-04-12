import { prismaClient } from '../../../database/prismaClient';

import { CreateOrderData } from '../create-order/protocols';
import { ISendOrderService, SendOrderServiceProps } from './protocols';

export class SendOrderService implements ISendOrderService {
  async execute(data: SendOrderServiceProps): Promise<CreateOrderData> {
    const item = await prismaClient.order.update({
      where: { id: data.item_id },
      data: { draft: false },
    });

    return item;
  }
}
