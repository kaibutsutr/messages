import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get() // decorators here saves us from typing everything.
  listMessages() {}
  @Get('/:id') // this one works only with wildcard
  getMessage() {}
  @Post()
  createMessage() {}
}
