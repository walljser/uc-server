import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { Roles } from '../constants';
import { ThirdLogin } from './third-login.entity';
import { BaseEntity } from './base.entity';
import { Exclude } from 'class-transformer';
import { hashValue, verifyValue } from '@/lib/cipher/hash';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userid: number;

  @Column({ type: 'varchar', nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: true })
  mobile: string;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  @Exclude()
  emailVerifiedAt: Date;

  @Column()
  @Exclude()
  password: string;

  @Exclude()
  beforeEncryptPassword: string;

  @Column({ type: 'timestamp', nullable: true })
  passwordUpdateTime: Date;

  @Column({ type: 'varchar', default: Roles.USER })
  role: Roles;

  @Column({ type: 'boolean', default: false })
  @Exclude()
  locked: boolean;

  @Column({ nullable: true })
  nickname: string;

  @Column({ nullable: true })
  realname: string;

  @Column({ nullable: true })
  birthday: string;

  @Column({ nullable: true })
  gender: number;

  @OneToMany((type) => ThirdLogin, (tl) => tl.user, { eager: true })
  thirdLogins: ThirdLogin[];

  // 创建时间
  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  // 更新时间
  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;

  @BeforeUpdate()
  @BeforeInsert()
  public async encryptPassword() {
    if (!this.beforeEncryptPassword) {
      this.beforeEncryptPassword = this.password;
    }
    if (this.beforeEncryptPassword === this.password) {
      this.password = await hashValue(this.password);
      this.passwordUpdateTime = new Date();
    }
  }

  public async validate(password: string): Promise<boolean> {
    return verifyValue(password, this.password);
  }
}
