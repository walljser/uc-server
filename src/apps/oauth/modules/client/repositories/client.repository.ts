import { ClientDto } from './../dtos/client.dto';
import { Client } from '@/apps/oauth/entities/client.entity';
import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  async createClient(clientDto: ClientDto): Promise<Client> {
    const { name } = clientDto;
    const findClient: Client = await this.findOne({ name });
    if (findClient) {
      throw new ConflictException('clientName已存在');
    }

    let client: Client = await this.create(clientDto);
    try {
      client = await this.save(client);
      return client;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
