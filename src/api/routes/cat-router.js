import express from 'express';
import {
  retrieveCats,
  retrieveCatById,
  createCat,
  updateCat,
  removeCat,
  retrieveCatsByUserId,
} from '../controllers/cat-controller.js';
import {authenticateToken} from '../../middlewares/authentication.js';

const catRouter = express.Router();

catRouter.route('/').get(retrieveCats).post(authenticateToken, createCat);

catRouter.get('/user/:id', retrieveCatsByUserId);

catRouter
  .route('/:id')
  .get(retrieveCatById)
  .put(authenticateToken, updateCat)
  .delete(authenticateToken, removeCat);

export default catRouter;
