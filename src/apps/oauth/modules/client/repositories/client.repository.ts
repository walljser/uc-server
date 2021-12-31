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
    console.log(111111);
    const { name } = clientDto;
    console.log(name);
    const findClient: Client = await this.findOne({ name });
    if (findClient) {
      throw new ConflictException("client's name has exists");
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
