import { Pool, ResultSetHeader } from 'mysql2/promise';
import Login from '../interfaces/login.interface';
import User from '../interfaces/user.interface';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<void> {
    const { username, classe, level, password } = user;

    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
  }

  public async findUser(login: Login): Promise<Login[]> {
    const { username, password } = login;

    const result = await this.connection.execute(`SELECT * FROM Trybesmith.Users 
    WHERE username = ? AND password = ?`, [username, password]);

    const [rows] = result;
    return rows as Login[];
  }
}

export default UserModel;
