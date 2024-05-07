import { prismaClient } from '../../../database/prismaClient';
import { CreateUserData } from '../create-user/protocols';
import { IDetailsUserService } from './protocols';

export class DetailsUserService implements IDetailsUserService {
  async execute(user_id: string): Promise<CreateUserData> {
    const user = await prismaClient.user.findFirst({
      where: { id: user_id },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}
