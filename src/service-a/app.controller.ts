import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { MessagePattern, Payload, ClientKafka, Client, Transport } from "@nestjs/microservices";
import { CompressionTypes, Message, Producer } from "@nestjs/microservices/external/kafka.interface";

@Controller()
export class ServiceAController implements OnModuleInit {
  private client: ClientKafka;

  constructor( @Inject( "ClientKafkaService" ) clientKafka: ClientKafka ) {
    this.client = clientKafka;

  }

  async onModuleInit(): Promise<void> {
    this.client.subscribeToResponseOf( 'ping' );
    await this.client.connect();
    setTimeout( async ()=>{
      console.log( await this.ping() );
    }, 2000 )
  }

  async ping() {
    let result;
    await this.client.send( "ping", "ping" ).forEach( ( value )=>{
      result = value;
    } );
    return `${result} - ${Date.now()}` ;
  }


  @Get("/")
  async forTest() {
    return this.ping();
  }

 }
