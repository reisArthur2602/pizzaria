import { prismaClient } from '../../../database/prismaClient';
import {
  CreateOrderData,
  CreateOrderProps,
  ICreateOrderService,
} from './protocols';

export class CreateOrderService implements ICreateOrderService {
  async execute(data: CreateOrderProps): Promise<CreateOrderData> {
    const order = await prismaClient.order.create({
      data: {
        table: data.table,
      },
    });

    return order;
  }
}
