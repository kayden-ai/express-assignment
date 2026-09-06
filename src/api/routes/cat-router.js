import express from 'express';
import {body} from 'express-validator';
import {
  retrieveCats,
  retrieveCatById,
  createCat,
  updateCat,
  removeCat,
  retrieveCatsByUserId,
} from '../controllers/cat-controller.js';
import {authenticateToken} from '../../middlewares/authentication.js';
import {validationErrors} from '../../middlewares/error-handlers.js';
import {upload} from '../../middlewares/upload.js';

const catRouter = express.Router();

catRouter
  .route('/')
  .get(retrieveCats)
  .post(
    authenticateToken,
    upload.single('file'),
    body('cat_name').trim().isLength({min: 3, max: 50}),
    body('weight').isNumeric(),
    body('birthdate').isISO8601(),
    validationErrors,
    createCat
  );

catRouter.get('/user/:id', retrieveCatsByUserId);

catRouter
  .route('/:id')
  .get(retrieveCatById)
  .put(authenticateToken, updateCat)
  .delete(authenticateToken, removeCat);

export default catRouter;
