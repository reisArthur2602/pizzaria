import { CreateUserData } from "../create-user/protocols";

export interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

export interface IDetailsUserService {
  execute(user_id : string ):Promise<CreateUserData>;
}
