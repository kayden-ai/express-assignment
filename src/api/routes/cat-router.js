import express from 'express';
import {
  retrieveCats,
  retrieveCatById,
  createCat,
  updateCat,
  removeCat,
} from '../controllers/cat-controller.js';

const catRouter = express.Router();

catRouter.route('/').get(retrieveCats).post(createCat);
catRouter.route('/:id').get(retrieveCatById).put(updateCat).delete(removeCat);

export default catRouter;
