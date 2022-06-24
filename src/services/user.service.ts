import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import generateToken from '../helpers/token.helper';
import Login from '../interfaces/login.interface';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<object> {
    await this.model.create(user);

    const token = generateToken(user);

    return { token };
  }

  public async login(login: Login): Promise<object> {
    const verify = await this.model.findUser(login);

    if (verify.length === 0) {
      throw new Error();
    }

    const token = generateToken(login);

    return { token };
  }
}

export default UserService;
