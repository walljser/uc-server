import { ClientDto } from './../dtos/client.dto';
import { Client } from '@/apps/oauth/entities/client.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientService } from '../services/client.service';

@Controller('/clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  getClients(): Promise<Client[]> {
    console.log('GET /clients');
    return this.clientService.getClients();
  }

  @Post()
  create(@Body() clientDto: ClientDto): Promise<Client> {
    console.log(2333);
    return this.clientService.createClient(clientDto);
  }
}
