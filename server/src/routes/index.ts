import { Router } from 'express';
import CreateBookService from '../services/CreateBookService';

const routes = Router();

routes.post('/books', async (req, res) => {
    const { name, author, description } = req.body;

    const createBookService = new CreateBookService();

    const book = await createBookService.execute({ name, author, description});

    return res.json(book);
});


export default routes;