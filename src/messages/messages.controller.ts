import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { log } from 'console';

@Controller('messages')
export class MessagesController {
  @Get() // decorators here saves us from typing everything.
  listMessages() {}
  @Get('/:id') // this one works only with wildcard
  getMessage(@Param('id') id: string) {
    // get id value from Param decorator and assign to id variable
    console.log(id);
  }
  @Post()
  createMessage(@Body body: any) {
    console.log(body);
  }
}
