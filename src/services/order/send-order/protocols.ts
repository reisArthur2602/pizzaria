import { CreateOrderData } from '../create-order/protocols';

export interface SendOrderServiceProps {
  order_id: string;
}
export interface ISendOrderService {
  execute(data: SendOrderServiceProps): Promise<CreateOrderData>;
}
