import { prismaClient } from '../../../database/prismaClient';
import {
  CreateCategoryData,
  CreateCategoryProps,
  ICreateCategoryService,
} from './protocols';

export class CreateCategoryService implements ICreateCategoryService {
  async execute(data: CreateCategoryProps): Promise<CreateCategoryData> {
    const category = await prismaClient.category.create({
      data: {
        name: data.name,
      },
    });
    return category;
  }
}
