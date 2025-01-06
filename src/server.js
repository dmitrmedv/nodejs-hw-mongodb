import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getEnvVar } from '../utils/getEnvVar';

dotenv.config();

const PORT = Number(getEnvVar('PORT', '3000'));

export function setupServer() {
  const app = express();
  app.use(cors());
  app.use((req, res, next) => {
    res.status(404).json({
      message: '404',
    });
  });
  app.use((req, res, next) => {
    console.log(`Time: ${new Date().toLocaleString()}`);
    next();
  });

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
