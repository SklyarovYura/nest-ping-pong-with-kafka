import { Controller, OnModuleInit } from '@nestjs/common';
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller()
export class ServiceBController implements OnModuleInit {
  async onModuleInit(): Promise<void> {

  }

  @MessagePattern( 'ping' )
  pong( @Payload() message ) {
    return 'pong';
  }


}
