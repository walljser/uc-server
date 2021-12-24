import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Roles } from '../constants';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({
    default: false
  })
  isActive: boolean;

  @Column({ type: 'varchar', default: Roles.USER})
  role: Roles;
}