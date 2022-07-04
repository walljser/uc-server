import { RegisterService } from './services/register.service';
import { Client } from '@/apps/oauth/entities/client.entity';
import { AccessToken } from './../../entities/access-token.entity';
import { ThirdLogin } from './../../entities/third-login.entity';
import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@oauth/entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      ThirdLogin,
      UserRepository,
      Client,
      AccessToken,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, RegisterService],
  exports: [UserService, RegisterService],
})
export class UserModule {}
