import express, { Application } from 'express';
import authRoutes from './routes/auth';
import morgan from 'morgan';

const app: Application = express();

//Middleware
app.use(morgan('dev'))

//Routes
app.use(express.json())
app.use('/api/auth', authRoutes)


export default app;