import { User } from '@/apps/oauth/entities';
import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async createUser(createUser: User): Promise<User> {
    let user: User = await this.create(createUser);
    try {
      user = await this.save(user);
      return user;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  public findAll(): Promise<User[]> {
    return this.find();
  }
}
