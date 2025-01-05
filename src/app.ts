import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
