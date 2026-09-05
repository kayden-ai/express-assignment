import express from 'express';
import multer from 'multer';
import {createThumbnail} from '../../middlewares/upload.js'; // <-- 1. Import the middleware
import {
  retrieveCats,
  retrieveCatById,
  createCat,
  updateCat,
  removeCat,
} from '../controllers/cat-controller.js';

const catRouter = express.Router();

const upload = multer({dest: 'uploads/'});

// 2. Chain upload.single and createThumbnail together
catRouter
  .route('/')
  .get(retrieveCats)
  .post(upload.single('cat'), createThumbnail, createCat);

catRouter.route('/:id').get(retrieveCatById).put(updateCat).delete(removeCat);

export default catRouter;
