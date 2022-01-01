import { isEmail } from '@/lib/util/isEmail';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@oauth/entities/user.entity';
import { CreateUserDto } from '../dtos/user.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  public findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username } = createUserDto;
    if (!isEmail(username)) {
      throw new BadRequestException('请输入正确的邮箱号');
    }
    const findUser: User = await this.userRepository.findOne({
      email: username,
    });
    if (findUser) {
      throw new ConflictException('用户邮箱已存在');
    }
    const user: User = new User();
    user.username = createUserDto.username;
    user.email = createUserDto.username;
    user.password = createUserDto.password;
    const newUser: User = await this.userRepository.createUser(user);
    delete newUser['password'];
    delete newUser['beforeEncryptPassword'];
    return newUser;
  }
}
