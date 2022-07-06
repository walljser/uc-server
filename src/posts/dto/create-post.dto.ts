/*
 * @Description:
 * @Author: YUSHIJIE
 * @Date: 2022-07-06 17:13:05
 * @LastEditTime: 2022-07-06 17:21:43
 * @LastEditors: YUSHIJIE
 * @Usage:
 */
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePostDto {
  @ApiPropertyOptional({ description: '文章标题' })
  @IsNotEmpty({ message: '文章标题不能为空' })
  readonly title: string;

  @ApiPropertyOptional({ description: '作者' })
  @IsNotEmpty()
  readonly author: string;

  @ApiPropertyOptional({ description: '内容' })
  @IsNotEmpty()
  readonly content: string;

  @ApiPropertyOptional({ description: '文章类型' })
  @IsNumber()
  readonly type: number;
}
