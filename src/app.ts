import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

//Application Routes
app.use('/api/v1/students', StudentRoutes);

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
