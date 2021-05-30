import { uuid } from 'uuidv4'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  description: string;


}

export default Book;
