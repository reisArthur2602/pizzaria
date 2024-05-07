export interface CreateProductsProps {
 
  name: string;
  price: string;
  description: string;
  category_id: string;
}

export interface CreateProductsData extends CreateProductsProps {
  id: string;
}

export interface ICreateProductService {
  execute(data: CreateProductsProps): Promise<CreateProductsData>;
}
