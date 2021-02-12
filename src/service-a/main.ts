import { NestFactory } from '@nestjs/core';
import { ServiceAModule } from './app.module';
import { Transport } from "@nestjs/microservices";

export async function bootstrap(  ) {
  const app = await NestFactory.create(ServiceAModule);
  await app.listen( 3000 );
}

// async function bootstrap( ) {
//   const app = await NestFactory.createMicroservice( ServiceAModule, {
//     transport: Transport.KAFKA,
//     options: {
//       client: {
//         brokers: [ 'localhost:9093' ],
//       },
//       consumer: {
//         groupId: 'serviceA-consumer'
//       }
//     }
//   } );
//
//   await app.listen( ()=>console.log( 'service A started' ) );
//
//
// }


bootstrap().catch( err=>console.error( err ) );