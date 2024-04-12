import { prismaClient } from '../../../database/prismaClient';
import { CreateOrderData } from '../create-order/protocols';
import { FinishOrderProps, IFinishOrder } from './protocols';

export class FinishOrderService implements IFinishOrder {
  async execute(data: FinishOrderProps): Promise<CreateOrderData> {
    const order = await prismaClient.order.update({
      where: { id: data.order_id },
      data: {
        status: true,
      },
    });

    return order;
  }
}
