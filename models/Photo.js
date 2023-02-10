import mongoose from 'mongoose';

const Schema = mongoose.Schema;

mongoose.set('strictQuery', false);

//Creat Schema

const PhotoSchema = new Schema({
  title: String,
  description: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Photo = mongoose.model('Photo', PhotoSchema);

//module.exports = Photo;

export default Photo;
