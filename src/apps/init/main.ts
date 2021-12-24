import { NestFactory } from '@nestjs/core';
import { getConnectionToken } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { SeedRunner } from './db/seeder/SeedRunner';
import { InitModule } from './init.module';
import * as seeds from './db/seeds';

export default async function bootstrap() {
  const app = await NestFactory.createApplicationContext(InitModule);

  const connection = app.get<Connection>(getConnectionToken());

  await connection.runMigrations({ transaction: 'all' });

  const seeder = new SeedRunner(connection);

  await seeder.runAll(Object.values(seeds));

  await connection.close();

  process.exit(0);
}