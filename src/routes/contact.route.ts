import express from 'express';
import { contact, test } from '../controllers/contact.controller';
const contactRouter = express.Router();

contactRouter.get('/test', test);
contactRouter.post('/contact', contact);

export default contactRouter;
