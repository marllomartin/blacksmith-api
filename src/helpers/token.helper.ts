import { sign } from 'jsonwebtoken';

const secret = 'banana';

function generateToken(payload: object) {
  const token = sign({ data: payload }, secret, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });

  return token;
}

export default generateToken;
