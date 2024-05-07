import { prismaClient } from '../../../database/prismaClient';
import { CreateOrderData } from '../create-order/protocols';
import { DeleteOrderServiceProps, IDeleteOrderService } from './protocols';

export class DeleteOrderService implements IDeleteOrderService{
async execute(data: DeleteOrderServiceProps): Promise<CreateOrderData> {
  const order = await prismaClient.order.delete({
    where: { id: data.order_id },
  });

  return order;
}

   
  
}
