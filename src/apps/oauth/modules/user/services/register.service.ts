import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@/apps/oauth/entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(data: Partial<User>): Promise<User> {
    if ((await this.userRepository.count({ email: data.email })) > 0) {
      throw new BadRequestException('邮箱已存在');
    }
    const user: User = await this.userRepository.save(
      this.userRepository.create({
        ...data,
        emailVerifiedAt: null,
      }),
    );
    return user;
  }
}
