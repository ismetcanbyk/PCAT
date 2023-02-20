import express from 'express';
import * as pageController from '../controllers/pageController.js';

const router = express.Router();

router.route('/add').get(pageController.getAddPhoto);
router.route('/about').get(pageController.getAbout);
router.route('/').get(pageController.getAllPhoto);





export default router;