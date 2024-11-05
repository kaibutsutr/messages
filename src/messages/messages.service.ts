import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
@Injectable() // mark this class for dependency
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}
  //bad code, we dont want classes creating its own dependencies on their own
  // messagesRepo: MessagesRepository; // creating property
  // constructor() {
  //   this.messagesRepo = new MessagesRepository(); // creating dependancy
  // }
  // correct way:

  findOne(id: string) {
    // we dont need async here since we have one in repository
    return this.messagesRepo.findOne(id); // bring the method from messages repository
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  createOne(content: string) {
    return this.messagesRepo.createOne(content);
  }
}
