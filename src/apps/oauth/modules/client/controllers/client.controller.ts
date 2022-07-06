/*
 * @Description: 
 * @Author: YUSHIJIE
 * @Date: 2021-12-30 09:15:44
 * @LastEditTime: 2022-07-04 16:33:52
 * @LastEditors: YUSHIJIE
 * @Usage: 
 */
import { ClientDto } from './../dtos/client.dto';
import { Client } from '@/apps/oauth/entities/client.entity';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ClientService } from '../services/client.service';

@Controller('api/clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get(':id')
  getClient(
    @Param('id') id: number,
    @Query('secret') secret: string,
  ): Promise<Client> {
    console.log(secret)
    return this.clientService.getClient({
      clientId: id,
      clientSecret: secret,
    }, true);
  }

  @Get()
  getClients(): Promise<Client[]> {
    return this.clientService.getClients();
  }

  @Post()
  create(@Body() clientDto: ClientDto): Promise<Client> {
    return this.clientService.createClient(clientDto);
  }
}
