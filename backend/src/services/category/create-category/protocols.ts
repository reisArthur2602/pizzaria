export interface CreateCategoryData {
  id: string;
  name: string;
  created_at : Date
  updated_at : Date
}
export interface CreateCategoryProps {
  name: string;
}
export interface ICreateCategoryService {
  execute(data: CreateCategoryProps): Promise<CreateCategoryData>;
}
