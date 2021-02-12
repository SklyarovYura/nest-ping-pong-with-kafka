import { NestFactory } from '@nestjs/core';
import { ServiceBModule } from './app.module';
import { Transport } from "@nestjs/microservices";

async function bootstrap( ) {
  const app = await NestFactory.createMicroservice( ServiceBModule, {
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
  } );
  await app.listen( ()=>console.log( 'server B started' ) );


}

bootstrap().catch( err=>console.error( err ) );