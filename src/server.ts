import dotenv from 'dotenv';
import { app } from './app';
import { connectPostgres } from './config/postgres';
import { connectMongo } from './config/mongo';
import { connectRedis } from './config/redis';

dotenv.config();

const startServer = async function () {
  try {
    await connectMongo();
    await connectPostgres();
    await connectRedis();
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

app.listen(8000, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:8000`);
});

startServer();
