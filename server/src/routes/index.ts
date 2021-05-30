import { Router } from 'express';
import { getCustomRepository, ReturningStatementNotSupportedError } from 'typeorm';

import BooksRepository from '../repositories/BooksRepository';
import CreateBookService from '../services/CreateBookService';

const routes = Router();

routes.post('/books', async (req, res) => {
    const { name, author, description } = req.body;

    const createBookService = new CreateBookService();

    const book = await createBookService.execute({ name, author, description});

    return res.json(book);
});

routes.get('/books', async (req, res) => {
    const booksRepository = getCustomRepository(BooksRepository);
    const book = await booksRepository.find();

    return res.json(book);
});

routes.get('/books/:name', async (req, res) => {
    const { name } = req.params;
    const booksRepository = getCustomRepository(BooksRepository);

    const book = await booksRepository.findByName(name);

    return res.json(book);
});

routes.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const booksRepository = getCustomRepository(BooksRepository);

    const book = await booksRepository.findById(id);

    return res.json(book);
});


export default routes;