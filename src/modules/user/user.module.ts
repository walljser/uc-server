import { Module } from "@nestjs/common";
import { UserController } from './controller/user.controller';
import { UserService } from "./services/user.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "src/entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [
    UserService
  ]
})
export class UserModule {}