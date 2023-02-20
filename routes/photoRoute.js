import express from 'express'
import * as photoController from '../controllers/photoController.js'


const router = express.Router();

router
.route('/')
.post(photoController.uploadPhoto)




router.route('/:id').get(photoController.createPhoto);
router.route('/edit/:id').get(photoController.editPhoto);
router.route('/:id').put(photoController.updatePhoto);
router.route('/:id').delete(photoController.deletePhoto);


export default router;