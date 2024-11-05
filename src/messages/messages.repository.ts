import { readFile, writeFile } from 'fs/promises'; // we need these from node to read write

export class MessagesRepository {
  // we always create a class in nest
  async findOne(id: string) {
    // we use async function for CRUD
    const contents = await readFile('messages.json', 'utf8'); // read the file messages.json and assign to object
    const messages = JSON.parse(contents); // then parse it from json to object and send it back
    return messages[id];
  }
  async findAll() {
    const contents = await readFile('messages.json', 'utf8'); //open up the file
    const messages = JSON.parse(contents); // read the contents and assign to objest
    return messages; // return the object
  }
  async createOne(content: string) {
    const contents = await readFile('/messages.json', 'utf8'); //open up the file
    const messages = JSON.parse(contets); // read the contents and assign to objest
    const id = Math.floor(Math.random() * 1000); // pick a random id
    messages.id = { id, content: content }; // messages.id={id, content}; same thing. Write the message in object
    await writeFile('messages.json', JSON.stringify(messages)); // update the new messages file to messages.json
  }
}
