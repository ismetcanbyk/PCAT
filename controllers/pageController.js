import Photo from '../models/Photo.js';

const getAddPhoto = (req, res) => {
  res.render('add');
}

const getAbout = (req, res) => {
  res.render('about');
};


const getAllPhoto = async (req, res) => {
  const photos = await Photo.find({}).sort('-dateCreated');
  res.render('index', {
    photos,
  });
};



export { getAddPhoto, getAbout, getAllPhoto };

