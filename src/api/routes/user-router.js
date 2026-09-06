import express from 'express';
import {
  retrieveUsers,
  retrieveUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user-controller.js';
import {authenticateToken} from '../../middlewares/authentication.js';

const userRouter = express.Router();

userRouter.route('/').get(retrieveUsers).post(createUser);

userRouter
  .route('/:id')
  .get(retrieveUserById)
  .put(authenticateToken, updateUser)
  .delete(authenticateToken, deleteUser);

export default userRouter;
