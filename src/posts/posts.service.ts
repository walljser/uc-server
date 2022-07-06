/*
 * @Description:
 * @Author: YUSHIJIE
 * @Date: 2022-07-06 15:45:46
 * @LastEditTime: 2022-07-06 16:46:27
 * @LastEditors: YUSHIJIE
 * @Usage:
 */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostsEntity } from './posts.entity';

export interface PostsRo {
  list: PostsEntity[];
  count: number;
}

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsEntity)
    private readonly postsRepository: Repository<PostsEntity>,
  ) {}

  async create(post: Partial<PostsEntity>): Promise<PostsEntity> {
    const { title } = post;
    if (!title) {
      throw new HttpException('缺少文章标题', 401);
    }
    const doc = await this.postsRepository.findOne({ where: { title } });
    if (doc) {
      throw new HttpException('文章标题重复', 401);
    }
    return await this.postsRepository.save(post);
  }

  async findAll(query): Promise<PostsRo> {
    const qb = await this.postsRepository.createQueryBuilder('post');
    qb.where('1 = 1');
    // qb.orderBy('posts.create_time', 'DESC');

    const count = await qb.getCount();
    const { pageNum = 1, pageSize = 10, ...params } = query;
    qb.limit(pageSize);
    qb.offset(pageSize * (pageNum - 1));

    const posts = await qb.getMany();

    return { list: posts, count };
  }

  async findById(id): Promise<PostsEntity> {
    return await this.postsRepository.findOne(id);
  }

  async updateById(id, post): Promise<PostsEntity> {
    const existPost = await this.postsRepository.findOne(id);

    if (!existPost) {
      throw new HttpException(`id为${id}的文章不存在`, 401);
    }

    const updatePost = this.postsRepository.merge(existPost, post);

    return this.postsRepository.save(updatePost);
  }

  async remove(id) {
    const existPost = await this.postsRepository.findOne(id);

    if (!existPost) {
      throw new HttpException(`id为${id}的文章不存在`, 401);
    }

    return this.postsRepository.remove(existPost);
  }
}
