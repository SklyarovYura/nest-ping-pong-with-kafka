import { Module } from '@nestjs/common';
import { ServiceAController } from './app.controller';
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module( {
  imports: [
    ClientsModule.register([
      {
        name: 'ClientKafkaService',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: [ process.env.KAFKA_HOST ],
            retry: {
              retries: 10,
              initialRetryTime: 1000,
            },
          },
          consumer: {
            groupId: 'serviceB-consumer'
          }
        }
      },
    ]),
  ],
  controllers: [ ServiceAController ],
} )
export class ServiceAModule {

}
