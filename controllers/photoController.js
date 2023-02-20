import Photo from "../models/Photo.js";
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const createPhoto = async (req, res) => {
    //console.log(req.params.id);
    const photo = await Photo.findById(req.params.id);
    res.render('photo', {
      photo,
    });
};


const uploadPhoto = async (req, res) => {
    //console.log(req.files.image);
    //await Photo.create(req.body);
    //console.log(req.body);
    //res.redirect('/');
  
    const uploadDir = 'public/uploads';
  
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
  
    let uploadImage = req.files.image;
    let uploadPath = +__dirname + '/../public/uploads/' + uploadImage.name;
    //console.log(uploadPath)
  
    uploadImage.mv(uploadPath, async () => {
      await Photo.create({
        ...req.body,
        image: '/uploads/' + uploadImage.name,
      });
      res.redirect('/');
    });
};


const editPhoto = async (req, res) => {
    const photo = await Photo.findOne({ _id: req.params.id });
    res.render('edit', {
      photo,
    });
};

const updatePhoto = async (req, res) => {
    const photo = await Photo.findOne({ _id: req.params.id });
    photo.title = req.body.title;
    photo.description = req.body.description;
    await photo.save();
    res.redirect(`/photos/${req.params.id}`);
};

const deletePhoto = async (req, res) => {
    const photo = await Photo.findOne({ _id: req.params.id });
    let deletedImg = __dirname + '/../public' + photo.image;
    if (fs.existsSync(deletedImg)) {
      fs.unlinkSync(deletedImg);
    }
    await photo.delete();
    res.redirect('/');
};

export { createPhoto ,uploadPhoto,editPhoto,updatePhoto,deletePhoto};