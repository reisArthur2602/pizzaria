import { compare } from 'bcryptjs';
import { prismaClient } from '../../../database/prismaClient';
import { AuthUserData, AuthUserProps, IAuthUserService } from './protocols';
import { sign } from 'jsonwebtoken';

export class AuthUserService implements IAuthUserService {
  async execute(data: AuthUserProps): Promise<AuthUserData> {
    const user = await prismaClient.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (!user) throw new Error('Usuário nao encontrado');

    const passwordMatch = await compare(data.password, user.password);
    if (!passwordMatch) throw new Error('Senha incorreta');

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d',
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    };
  }
}
