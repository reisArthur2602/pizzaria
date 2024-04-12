import { prismaClient } from '../../../../database/prismaClient';
import { CreateItemData } from '../create-item/protocols';

import { DeleteItemServiceProps, IDeleteItemService } from './protocols';

export class DeleteItemService implements IDeleteItemService {
  async execute(data: DeleteItemServiceProps): Promise<CreateItemData> {

    const item = await prismaClient.item.delete({
      where: { id: data.item_id },
    });
  
    return item;
  }
}
