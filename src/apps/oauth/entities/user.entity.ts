import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Roles } from '../constants';
import { ThirdLogin } from './third-login.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({
    default: false,
  })
  isActive: boolean;

  @Column({ type: 'varchar', default: Roles.USER })
  role: Roles;

  @OneToMany((type) => ThirdLogin, (tl) => tl.user, { eager: true })
  thirdLogins: ThirdLogin[];
}
