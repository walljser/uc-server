import { Client } from '@/apps/oauth/entities/client.entity';
import { Controller, Get } from '@nestjs/common';
import { ClientService } from '../services/client.service';

@Controller('/clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  getClients(): Promise<Client[]> {
    return this.clientService.getClients();
  }
}
