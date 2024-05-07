export interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

export interface CreateUserData {
  id: string;
  name: string;
  email: string;
}

export interface ICreateUserService {
  execute(data: CreateUserProps): Promise<CreateUserData>;
}
