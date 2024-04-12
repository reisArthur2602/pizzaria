import { prismaClient } from '../../../database/prismaClient';
import { CreateProductsProps } from '../create-product/protocols';
import { IFilterProductService } from './protocols';

export class FilterProductService implements IFilterProductService {
  async execute(category_id: string): Promise<CreateProductsProps[]> {
    const products = await prismaClient.product.findMany({
      where: { category_id: category_id },
      select: {
        name: true,
        price: true,
        description: true,
        banner: true,
        category_id: true,
      },
    });
    return products;
  }
}
