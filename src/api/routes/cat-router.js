import express from 'express';
import multer from 'multer';
import {
  retrieveCats,
  retrieveCatById,
  createCat,
  updateCat,
  removeCat,
} from '../controllers/cat-controller.js';

const catRouter = express.Router();

const upload = multer({dest: 'uploads/'});

catRouter.route('/').get(retrieveCats).post(upload.single('cat'), createCat);
catRouter.route('/:id').get(retrieveCatById).put(updateCat).delete(removeCat);

export default catRouter;
