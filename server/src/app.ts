import mongoose from 'mongoose';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import userRouter from './routes/usersRouter';
import { errorHandler } from './middlewares/errorHandler';
import { logger } from './middlewares/logger';

configDotenv();
const PORT = process.env.PORT;
const app = express();

/////////// MONGO DB CONNECTION ////////////
const monoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
async function main() {
  await mongoose.connect(monoDB);
}
main().catch((e) => console.log(e));
//----------------------------------------//

// Express Middlewares
app.use(helmet());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
//app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use(logger);
app.use('/user', userRouter);

// Server Health Check
app.get('/health-check', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is up and running!' });
});

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
