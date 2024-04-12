import { CreateProductsProps } from "../create-product/protocols"

export interface IFilterProductService{
execute(category_id:string):Promise<CreateProductsProps[]>
}