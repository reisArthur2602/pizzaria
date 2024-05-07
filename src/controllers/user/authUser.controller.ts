import { Request, Response } from 'express';
import { AuthUserService } from '../../services/user/auth-user/authUser.services';
import { AuthUserProps } from '../../services/user/auth-user/protocols';

export class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password }: AuthUserProps = req.body;

    if (!email || !password) throw new Error('Preencha todos os campos');

    const authUserService = new AuthUserService();

    const user = await authUserService.execute({
      email,
      password,
    });

    return res.json(user);
  }
}
