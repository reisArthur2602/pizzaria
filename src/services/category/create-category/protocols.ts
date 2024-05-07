export interface CreateCategoryData {
  id: string;
  name: string;
}
export interface CreateCategoryProps {
  name: string;
}
export interface ICreateCategoryService {
  execute(data: CreateCategoryProps): Promise<CreateCategoryData>;
}
