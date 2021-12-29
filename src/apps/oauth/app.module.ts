import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { ClientModule } from './modules/client/client.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as configs from '@/config';
import * as entities from './entities';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: Object.values(configs)
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          ...config.get('db'),
          entities: Object.values(entities)
        };
      }
    }),
    UserModule,
    ClientModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
