import { randomBytes } from 'crypto';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  GrantTypes,
  ResponseModes,
  ResponseTypes,
  Scopes,
  TokenAuthMethod,
} from '../constants';
import { BaseEntity } from './base.entity';

@Entity()
export class Client extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  secret: string;

  @Column({ type: 'varchar', nullable: false })
  redirect: string[];

  @Column({
    type: 'varchar',
    default: `${GrantTypes.authorization_code}`,
  })
  grantTypes: GrantTypes[];

  @Column({ type: 'varchar', default: `${ResponseTypes.code}` })
  responseTypes: ResponseTypes[];

  @Column({ type: 'varchar', default: `${ResponseModes.query}` })
  responseModes: ResponseModes[];

  @Column({
    type: 'varchar',
    default: `${Object.values(Scopes).join(',')}`,
  })
  scopes: string;

  @Column({
    type: 'varchar',
    default: `${TokenAuthMethod.client_secret_post},${TokenAuthMethod.client_secret_basic}`,
  })
  authMethods: TokenAuthMethod[];

  @BeforeInsert()
  createSecret() {
    if (!this.secret) {
      this.secret = randomBytes(32).toString('hex');
    }
  }
}
