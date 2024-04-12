import { prismaClient } from '../../../../database/prismaClient';
import {
  DetailsItemServiceData,
  DetailsItemServiceProps,
  IDetailsItemService,
} from './protocols';

export class DetailsItemService implements IDetailsItemService {
  async execute(
    data: DetailsItemServiceProps
  ): Promise<DetailsItemServiceData[]> {
    
    const items = await prismaClient.item.findMany({
      where: { order_id: data.order_id },
      include: { order: true, product: true },
    });
    return items;
  }
}
