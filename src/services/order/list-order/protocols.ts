import { CreateOrderData } from '../create-order/protocols';

export interface IListOrderService {
  execute(): Promise<CreateOrderData[]>;
}
