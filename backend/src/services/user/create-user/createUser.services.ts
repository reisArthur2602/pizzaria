import { hash } from 'bcryptjs';
import { prismaClient } from '../../../database/prismaClient';
import {
  CreateUserData,
  CreateUserProps,
  ICreateUserService,
} from './protocols';

export class CreateUserService implements ICreateUserService {
  async execute(data: CreateUserProps): Promise<CreateUserData> {
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userAlreadyExists) throw new Error('Este email já está cadastrado');

    const passwordHash = await hash(data.password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
        updated_at: true,
      },
    });

    return user;
  }
}
