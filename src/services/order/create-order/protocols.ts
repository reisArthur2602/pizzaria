export interface CreateOrderProps {
  name?: string;
  table: number;
}

export interface CreateOrderData {
  id: string;
  table: number;
  status: boolean;
  draft: boolean; 
}

export interface ICreateOrderService {
  execute(data: CreateOrderProps): Promise<CreateOrderData>;
}
