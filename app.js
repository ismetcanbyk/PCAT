import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import methodOverride from 'method-override';
import pageRoute from './routes/pageRoute.js'
import photoRoute from './routes/photoRoute.js'


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
app.use(fileUpload({ useTempFiles: true }));
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//Routes

app.use('/', pageRoute);
app.use('/photos', photoRoute);



app.listen(port, () => {
  console.log(`Sunucu ${port} de çalışıyor.`);
});
