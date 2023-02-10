import express from 'express';
import ejs from 'ejs';
import Photo from './models/Photo.js';
import mongoose from 'mongoose';

const port = 3000;

const app = express();

//Connect DB

mongoose.connect('mongodb://localhost/pcat-test-db');

//Template Engine

app.set('view engine', 'ejs');

//Middlewares

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes

app.get('/', async (req, res) => {
  const photos = await Photo.find({});
  res.render('index', {
    photos,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/photos', async (req, res) => {
  await Photo.create(req.body);
  //console.log(req.body);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Sunucu ${port} de çalışıyor.`);
});
