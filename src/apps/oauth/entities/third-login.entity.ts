import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity()
export class ThirdLogin extends BaseEntity {
  /**
   * 类型
   * @type {string}
   * @memberof ThirdLogin
   */
  @Column({ type: 'varchar' })
  type: string;

  /**
   * 第三方id
   *
   * @type {string}
   * @memberof ThirdLogin
   */
  @Column({ type: 'varchar' })
  thirdId: string;

  /**
   * 用户id
   *
   * @type {string}
   * @memberof ThirdLogin
   */
  @Column({ type: 'uuid' })
  userId: string;

  /**
   * 头像
   *
   * @type {string}
   * @memberof ThirdLogin
   */
  @Column({ type: 'varchar', nullable: true })
  avatar: string;

  @ManyToOne((type) => User, (u) => u.thirdLogin, { onDelete: 'CASCADE' })
  user: User;
}
