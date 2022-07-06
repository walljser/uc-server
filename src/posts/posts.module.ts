/*
 * @Description:
 * @Author: YUSHIJIE
 * @Date: 2022-07-06 15:43:47
 * @LastEditTime: 2022-07-06 16:41:58
 * @LastEditors: YUSHIJIE
 * @Usage:
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './posts.controller';
import { PostsEntity } from './posts.entity';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [TypeOrmModule.forFeature([PostsEntity])],
})
export class PostsModule {}
