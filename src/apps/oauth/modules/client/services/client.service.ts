import { Client } from '@/apps/oauth/entities/client.entity';
import { UcException } from '@/apps/oauth/exceptions';
import { ClientCredentials } from '@/apps/oauth/interfaces';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  public async getClient(
    { clientId, clientSecret }: ClientCredentials,
    validClientSecret?: boolean,
  ): Promise<Client> {
    const client = await this.clientRepository.findOne(clientId);
    if (!client) {
      throw UcException.invalidClient();
    }
    if (
      validClientSecret &&
      (!clientSecret || clientSecret !== client.secret)
    ) {
      throw UcException.invalidClient('Client secret does not match');
    }
    return client;
  }

  public async getClients(): Promise<Client[]> {
    return await this.clientRepository.find();
  }
}
