export interface CreateOrderProps {
  name?: string;
  table: number;
}

export interface CreateOrderData {
  id: string;
  name?: string;
  table: number;
  status: boolean;
  draft: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateOrderService {
  execute(data: CreateOrderProps): Promise<CreateOrderData>;
}
