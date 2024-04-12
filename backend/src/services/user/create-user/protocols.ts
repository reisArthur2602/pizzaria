export interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

export interface CreateUserData {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateUserService {
  execute(data: CreateUserProps): Promise<CreateUserData>;
}
