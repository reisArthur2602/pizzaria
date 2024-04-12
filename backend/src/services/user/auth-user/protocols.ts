import { CreateUserData } from "../create-user/protocols";

export interface AuthUserProps {
  email: string;
  password: string;
}

export interface AuthUserData extends CreateUserData {
  token: string;
}

export interface IAuthUserService {
  execute(data: AuthUserProps): Promise<AuthUserData>;
}
