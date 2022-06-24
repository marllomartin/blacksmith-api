import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const result = await this.userService.create(user);

    res.status(201).json(result);
  };

  public login = async (req: Request, res: Response) => {
    const user = req.body;

    try {
      const result = await this.userService.login(user);

      res.status(200).json(result);
    } catch (Error) {
      return res.status(401).send({ message: 'Username or password invalid' });
    }
  };
}

export default UserController;
