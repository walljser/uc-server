import { Controller, Get } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { UserService } from "src/services/user.service";

@Controller('/users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }
}