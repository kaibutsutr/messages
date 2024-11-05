import { readFile, writeFile } from 'fs/promises'; // we need these from node to read write
export class MessagesRepository {
  // we always create a class in nest
  async findOne(id: string) {
    // we use async function for CRUD
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  async findAll() {}
  async createOne(message: string) {}
}
