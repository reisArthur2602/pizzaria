import { CreateCategoryData } from "../create-category/protocols";


export interface IListCategoryService {
  execute(): Promise<CreateCategoryData[]>;
}
