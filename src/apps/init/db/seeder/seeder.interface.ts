import { EntityManager } from 'typeorm';

export interface Seeder {
  run(entityManager: EntityManager): Promise<any>;
  revert(entityManager: EntityManager): Promise<any>;
  shouldSeed?(entityManager: EntityManager): Promise<boolean>;
}
