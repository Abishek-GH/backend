import express from 'express';

export const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server launched sucessfully...');
});

app.get('/home', (req, res) => {
  res.send('Home Route!');
});
