import { prismaClient } from '../../../database/prismaClient';
import { CreateProductsProps } from '../create-product/protocols';
import { FilterProps, IFilterProductService } from './protocols';

export class FilterProductService implements IFilterProductService {
  async execute(data: FilterProps): Promise<CreateProductsProps[]> {
    const products = await prismaClient.product.findMany({
      where: { category_id: data.category_id }
    });
    return products;
  }
}
