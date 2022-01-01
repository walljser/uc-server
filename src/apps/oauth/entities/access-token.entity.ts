import { Column, ManyToMany, ManyToOne } from 'typeorm';
import { GrantTypes } from '../constants';
import { Client } from './client.entity';

export class AccessTokenEntity {
  @Column({ type: 'uuid', nullable: true })
  userId: string;

  @Column({ type: 'uuid', nullable: true })
  clientId: string;

  @Column({ type: 'uuid', nullable: true })
  scopes: string[];

  @Column({ type: 'varchar' })
  grantType: GrantTypes;
 
  // @ManyToOne(type => Client, client => client.to )
  // client!: Promise<Client>;
}
