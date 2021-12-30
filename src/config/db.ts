import { registerAs } from '@nestjs/config';
import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import { ConnectionOptions } from 'typeorm';

const defaultOrmConfigs = require('../../ormconfig');

export const db = registerAs<ConfigFactory<ConnectionOptions>>('db', () => ({
  ...defaultOrmConfigs,
  autoLoadEntities: true,
  entities: null,
  retryAttempts: 20,
  retryDelay: 5000,
}));
