import { CreateCategoryData } from '../../category/create-category/protocols';

export interface CreateProductsProps {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

export interface CreateProductsData extends CreateProductsProps {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateProductService {
  execute(data: CreateProductsProps): Promise<CreateCategoryData>;
}
