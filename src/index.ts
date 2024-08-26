import express, { Request, Response, NextFunction } from 'express';
import contactRouter from './routes/contact.route';
import cors from 'cors';

const app = express();

const PORT = 5000;

// body parser
app.use(express.json({ limit: '50mb' }));

// cors => cross origin resource sharing
app.use(
    cors({
        origin: ['http://localhost:3000', 'https://mahumacademy.lk'],
        credentials: true,
    }),
);

// routes
app.use('/api/v1', contactRouter);

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT} 🚀`);
});
