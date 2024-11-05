import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { log } from 'console';
import { CreateMessageDto } from './dtos/create-message.dto'; // import our Data transfer object so we check for validation in our CRUD
import { MessagesService } from './messages.service'; // service we created is needed here. not the REPO

@Controller('messages')
export class MessagesController {
  // this kind of code below doesnt follow the INVERSE OF CONTROL principle therefore its a bad coding practice
  // we dont want our classes creating its own dependancy instances
  // messagesService: MessagesService; // assign property
  // constructor() {
  //   this.messagesService = new MessagesService(); // create dependency
  // }
// correct version :
constructor(public messagesService:MessagesService);

  @Get() // decorators here saves us from typing everything.
  listMessages() {
    return this.messagesService.findAll(); // use the service. we need return here to return something after a request
  }
  @Get('/:id') // this one works only with wildcard
  async getMessage(@Param('id') id: string) {
    // get id value from Param decorator and assign to id variable
    const message = await this.messagesService.findOne(id); // check if message with id actually exists
    if (!message) {
      // if promise is refused then throw error
      throw new NotFoundException('Message not found');
    }
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.createOne(body.content); // we need the content property from the body object, not the entire object here
  }
}
