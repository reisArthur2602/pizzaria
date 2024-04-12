import { prismaClient } from '../../../database/prismaClient';
import { CreateOrderData } from '../create-order/protocols';
import { IListOrderService } from './protocols';

export class ListOrderService implements IListOrderService {
  async execute(): Promise<CreateOrderData[]> {
    const orders = await prismaClient.order.findMany({
      where: { draft: true, status: false },
    });

    return orders;
  }
}
