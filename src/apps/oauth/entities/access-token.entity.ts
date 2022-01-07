import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '.';
import { GrantTypes } from '../constants';
import { Client } from './client.entity';

@Entity()
export class AccessToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'uuid', nullable: true })
  userId: string;

  @Column({ type: 'uuid', nullable: true })
  clientId: string;

  @Column({ type: 'uuid', nullable: true })
  scopes: string[];

  @Column({ type: 'varchar' })
  grantType: GrantTypes;

  @ManyToOne((type) => Client, (client) => client.tokens, {
    onDelete: 'CASCADE',
  })
  client!: Promise<Client>;

  @ManyToOne((type) => User, (user) => user.tokens, {
    onDelete: 'CASCADE',
  })
  user: Promise<User>;
}
