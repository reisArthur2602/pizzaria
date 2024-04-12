export interface CreateItemProps {
  order_id: string;
  product_id: string;
  amount: number;
}

export interface CreateItemData extends CreateItemProps {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateItemService {
  execute(data: CreateItemProps): Promise<CreateItemData>;
}
