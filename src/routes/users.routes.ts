import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateUser from '../middlewares/users.middleware';

const router = Router();

const { validateUsername, validateClasse, validateLevel, validatePassword } = validateUser;

const userController = new UserController();

// Create User
router.post(
  '/users',
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,

  userController.create,
);

// Login
router.post('/login', validateUsername, validatePassword, userController.login);

export default router;
