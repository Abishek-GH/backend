import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI as string;

export const connectMongo = async function () {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connection Established...');
  } catch (error) {
    console.error(`MongoDB connection Failed, Error: ${error}`);
  }
};
