import { verifyToken } from '~/helpers/privateToken';
import config from '~/config';

// eslint-disable-next-line consistent-return
const authMiddleware = (req, res, next) => {
  const tokenFromClient = req.headers.authorization;

  if (!tokenFromClient) {
    return res.status(403).send({
      message: 'No token provided.',
    });
  }

  try {
    verifyToken(tokenFromClient, config.accessTokenSecret);
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Unauthorized.',
    });
  }
};

export { authMiddleware };
