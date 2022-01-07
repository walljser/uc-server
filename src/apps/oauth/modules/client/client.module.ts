import { AccessToken } from './../../entities/access-token.entity';
import { ClientRepository } from './repositories/client.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../../entities/client.entity';
import { ClientController } from './controllers/client.controller';
import { ClientService } from './services/client.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client, ClientRepository, AccessToken])],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
