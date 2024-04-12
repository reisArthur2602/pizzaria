import { prismaClient } from '../../../database/prismaClient';
import { CreateCategoryData } from '../create-category/protocols';
import { IListCategoryService } from './protocols';

export class ListCategoryService implements IListCategoryService {
  async execute(): Promise<CreateCategoryData[]> {
    const category = await prismaClient.category.findMany({});

    return category;
  }
}
