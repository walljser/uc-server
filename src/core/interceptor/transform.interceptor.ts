/*
 * @Description:
 * @Author: YUSHIJIE
 * @Date: 2022-07-06 17:02:45
 * @LastEditTime: 2022-07-06 17:04:41
 * @LastEditors: YUSHIJIE
 * @Usage:
 */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          code: 0,
          message: '请求成功',
        };
      }),
    );
  }
}
