import { getRepository } from 'typeorm';

import Book from '../models/Books';

interface Request {
  name: string,
  author: string,
  description: string
}

class CreateBookService {
  public async execute({ name, author, description }: Request): Promise<Book> {
    const booksRepsitory = getRepository(Book);

    const book = booksRepsitory.create({
      name,
      author,
      description
    });

    await booksRepsitory.save(book);

    return book;
  }

}

export default CreateBookService;
