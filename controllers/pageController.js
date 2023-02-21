import Photo from '../models/Photo.js';

const getAddPhoto = (req, res) => {
  res.render('add');
}

const getAbout = (req, res) => {
  res.render('about');
};


const getAllPhoto = async (req, res) => {

  const page = req.query.page || 1;
  const photosPerPage = 3;

  const totalPhotos = await Photo.find().countDocuments();

  const photos = await Photo.find({})
    .sort('-dateCreated')
    .skip((page - 1) * photosPerPage)
    .limit(photosPerPage);

  res.render('index', {
    photos: photos,
    current: page,
    pages: Math.ceil(totalPhotos / photosPerPage)
  });
};



export { getAddPhoto, getAbout, getAllPhoto };

