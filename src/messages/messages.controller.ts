import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { log } from 'console';
import { CreateMessageDto } from './dtos/create-message.dto'; // import our Data transfer object so we check for validation in our CRUD

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
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }
}
