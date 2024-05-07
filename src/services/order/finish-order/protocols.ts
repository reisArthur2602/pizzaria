import { CreateOrderData } from '../create-order/protocols';

export interface FinishOrderProps {
  order_id: string;
}

export interface IFinishOrder {
  execute(data: FinishOrderProps): Promise<CreateOrderData>;
}
