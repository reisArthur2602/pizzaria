import { CreateProductsData } from '../../../product/create-product/protocols';
import { CreateOrderData } from '../../create-order/protocols';

export interface DetailsItemServiceProps {
  order_id: string;
}

export interface DetailsItemServiceData {
  id: string;
  order_id: string;
  product_id: string;
  amount: number; 
  created_at : Date
  updated_at : Date
  product: CreateProductsData;
  order: CreateOrderData;
 
}

export interface IDetailsItemService {
  execute(data: DetailsItemServiceProps): Promise<DetailsItemServiceData[]>;
}
