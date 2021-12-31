import { Column } from 'typeorm';

export class AccessTokenEntity {
  @Column({ type: 'uuid', nullable: true })
  userId: string;

  @Column({ type: 'uuid', nullable: true })
  clientId: string;

  scopes: string[];
}
