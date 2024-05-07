import { prismaClient } from '../../../database/prismaClient';

import {
  CreateProductsData,
  CreateProductsProps,
  ICreateProductService,
} from './protocols';

export class CreateProductService implements ICreateProductService {
  async execute(data: CreateProductsProps): Promise<CreateProductsData> {
    const product = await prismaClient.product.create({
      data: {
        name: data.name,
        price: data.price,
        description: data.description,
        category_id: data.category_id,
      },
    });
    return product;
  }
}
