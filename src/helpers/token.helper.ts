import { sign } from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const secret = 'banana';

function generateToken(payload: User) {
  const token = sign({ data: payload }, secret, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });

  return token;
}

export default generateToken;
