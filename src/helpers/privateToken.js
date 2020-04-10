import jwt from 'jsonwebtoken';
import config from '~/config';

const generateToken = (user) =>
  jwt.sign(user, config.accessTokenSecret, {
    algorithm: 'HS256',
    expiresIn: config.accessTokenLife,
  });

const verifyToken = (token) => jwt.verify(token, config.accessTokenSecret);

export { generateToken, verifyToken };
