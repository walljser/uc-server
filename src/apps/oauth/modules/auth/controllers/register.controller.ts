import { RegisterService } from './../../user/services/register.service';
import {
  Body,
  Controller,
  forwardRef,
  Get,
  Inject,
  Post,
  Query,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { RegisterDto } from '../dtos/register.dto';

@Controller('auth')
export class RegisterController {
  constructor(
    @Inject(forwardRef(() => RegisterService))
    private readonly registerService: RegisterService,
  ) {}

  @Post('register')
  async registerUser(
    @Body() data: RegisterDto,
    @Query('redirect_uri') intended: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const user = await this.registerService.register(data);

    await new Promise((resolve, reject) =>
      // @ts-ignore
      req.login(user, (err) => {
        if (err) {
          return reject(err);
        }
        resolve(user);
      }),
    );

    if (req.accepts('json')) {
      return res.status(201).json({
        returnTo: intended || '/',
      });
    }

    res.redirect(intended || '/');
  }

  @Get('register')
  @Render('index')
  showRegisterForm(@Req() req: Request) {
    return {
      // @ts-ignore
      csrfToken: req.csrfToken(),
    };
  }
}
