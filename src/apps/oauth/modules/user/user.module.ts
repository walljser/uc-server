import { ThirdLogin } from './../../entities/third-login.entity';
import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@oauth/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, ThirdLogin])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
