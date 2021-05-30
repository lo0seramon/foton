import { Repository, EntityRepository } from 'typeorm';

import Book from '../models/Books';

@EntityRepository(Book)
class BooksRepository extends Repository<Book> {
    public async findByName(name: string): Promise<Book | null> {
        const findBook = await this.findOne({
            where: { name }
        });

        return findBook || null;
    }

    public async findById(id: string): Promise<Book | null> {
        const findBook = await this.findOne({
            where: { id }
        });

        return findBook || null;
    }
}

export default BooksRepository;