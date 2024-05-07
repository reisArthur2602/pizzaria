export interface CreateItemProps {
  order_id: string;
  product_id: string;
  amount: number;
}

export interface CreateItemData extends CreateItemProps {
  id: string;
}

export interface ICreateItemService {
  execute(data: CreateItemProps): Promise<CreateItemData>;
}
