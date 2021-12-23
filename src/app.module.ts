import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'user_center_dev',
      autoLoadEntities: true,
      synchronize: true,
      cli: {
        migrationsDir: 'src/db/migrations',
        entitiesDir: 'src/entities'
      },
      migrations: ['src/db/migrations/**/*.ts'],
      // entities: ['src/entities/**/*.ts']
      entities: [User]
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
