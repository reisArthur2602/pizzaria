
import { CreateItemData } from '../create-item/protocols';

export interface DeleteItemServiceProps {
  item_id: string;
}
export interface IDeleteItemService {
  execute(data: DeleteItemServiceProps): Promise<CreateItemData>;
}
