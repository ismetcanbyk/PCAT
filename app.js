import express from 'express';

const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('merhaba');
  res.end();
});

app.listen(port, () => {
  console.log(`Sunucu ${port} de çalışıyor.`);
});
