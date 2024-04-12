import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/create-user/createUser.services';
import { CreateUserProps } from '../../services/user/create-user/protocols';

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password }: CreateUserProps = req.body;

    if (!name || !email || !password)
      throw new Error('Preencha todos os campos');

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return res.json(user);
  }
}
