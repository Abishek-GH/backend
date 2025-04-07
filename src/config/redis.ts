import dotenv from 'dotenv';
import Redis from 'ioredis';

dotenv.config();

let redis: Redis | null = null;

export const connectRedis = async function () {
  redis = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  });

  redis.on('connect', () => {
    console.log('Redis connected...');
  });

  redis.on('error', (error) => {
    console.error('Redis connection Failed, Error:', error);
  });
};

export { redis };

// Other ways of establishing Redis connection

// Option 1
// import Redis from 'ioredis';
// import dotenv from 'dotenv';
// dotenv.config();
// export const redis = new Redis({
//   host: process.env.REDIS_HOST,
//   port: Number(process.env.REDIS_PORT),
// });
// redis.on('connect', () => {
//   console.log('Redis connected...');
// });
// redis.on('error', (error) => {
//   console.log(`Redis connection failed, Error:${error}`);
// });

// Option 2

// import { createClient } from 'redis';
// const client = createClient();
// client.on('connect', () => console.log('Redis connected'));
// client.on('error', (err) => console.error('Redis error:', err));
// await client.connect();
// await client.set('key', 'value');
// const val = await client.get('key');
// console.log(val); // value
