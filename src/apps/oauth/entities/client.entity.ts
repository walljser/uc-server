import { AccessToken } from './access-token.entity';
import { randomBytes } from 'crypto';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
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

  @Column({ type: 'simple-array', nullable: false })
  redirect: string[];

  @Column({
    type: 'simple-array',
  })
  grantTypes: GrantTypes[];

  @Column({
    type: 'simple-array',
  })
  responseTypes: ResponseTypes[];

  @Column({
    type: 'simple-array',
  })
  responseModes: ResponseModes[];

  @Column({
    type: 'varchar',
    default: `${Object.values(Scopes).join(',')}`,
  })
  scopes: string;

  @Column({
    type: 'simple-array',
  })
  authMethods: TokenAuthMethod[];

  @OneToMany(() => AccessToken, (token) => token.client)
  tokens!: Promise<AccessToken>;

  @BeforeInsert()
  defaultResponseValues() {
    if (!this.grantTypes) {
      this.grantTypes = [GrantTypes.authorization_code];
    }
    if (!this.responseTypes) {
      this.responseTypes = [ResponseTypes.code];
    }
    if (!this.responseModes) {
      this.responseModes = [ResponseModes.query];
    }
    if (!this.authMethods) {
      this.authMethods = [
        TokenAuthMethod.client_secret_post,
        TokenAuthMethod.client_secret_basic,
      ];
    }
    if (!this.secret) {
      this.secret = randomBytes(32).toString('hex');
    }
  }
}
