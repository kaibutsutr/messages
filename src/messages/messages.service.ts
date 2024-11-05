import { MessagesRepository } from './messages.repository';
export class MessagesService {
  //bad code, we dont want classes creating its own dependencies on their own
  // messagesRepo: MessagesRepository; // creating property
  // constructor() {
  //   this.messagesRepo = new MessagesRepository(); // creating dependancy
  // }
  // correct way:
  constructor(public messagesRepo:MessagesRepository)
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
