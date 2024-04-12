import { prismaClient } from '../../../database/prismaClient';
import { CreateCategoryData } from '../../category/create-category/protocols';
import { CreateProductsProps, ICreateProductService } from './protocols';

export class CreateProductService implements ICreateProductService {
  async execute(data: CreateProductsProps): Promise<CreateCategoryData> {
    const product = await prismaClient.product.create({
      data: {
        name: data.name,
        price: data.price,
        description: data.description,
        banner: data.banner,
        category_id: data.category_id,
      },
    });
    return product;
  }
}
