import { LoginDto } from './../dtos/login.dto';
import {
  Body,
  Controller,
  Post,
  Query,
  Req,
  Res,
  Session,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { loginSuccessUtil } from '@/utils/loginSuccess.util';

@Controller('auth')
export class LoginController {
  @Post('login')
  login(
    @Query('redirect_uri') intended: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return loginSuccessUtil(req, res, intended || '/');
  }
}
