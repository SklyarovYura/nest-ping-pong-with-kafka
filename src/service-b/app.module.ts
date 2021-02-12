import { Module } from '@nestjs/common';
import { ServiceBController } from './app.controller';

@Module( {
  imports: [],
  controllers: [ ServiceBController ]
} )
export class ServiceBModule {

}
