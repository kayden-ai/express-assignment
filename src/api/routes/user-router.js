import express from 'express';
import {
  retrieveUsers,
  retrieveUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user-controller.js';

const userRouter = express.Router();

userRouter.route('/').get(retrieveUsers).post(createUser);

userRouter
  .route('/:id')
  .get(retrieveUserById)
  .put(updateUser)
  .delete(deleteUser);

export default userRouter;
