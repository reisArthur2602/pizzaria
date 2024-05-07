import { CreateProductsProps } from '../create-product/protocols';

export interface FilterProps {
  category_id: string;
}
export interface IFilterProductService {
  execute(data: FilterProps): Promise<CreateProductsProps[]>;
}
