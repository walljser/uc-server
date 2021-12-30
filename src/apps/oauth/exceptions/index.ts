import { HttpException, HttpStatus } from '@nestjs/common';

export class UcException extends HttpException {
  private payload: Record<string, any>;

  constructor(
    error: string,
    description?: string,
    httpStatusCode = HttpStatus.BAD_REQUEST,
  ) {
    super({ error, description }, httpStatusCode);

    this.payload = {
      error,
      description,
    };
  }

  static invalidClient(msg?: string) {
    return new UcException(
      'invalid client',
      `Client authentication failed. ${msg} || ''`.trimRight(),
      HttpStatus.UNAUTHORIZED,
    );
  }
}
