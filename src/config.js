const { NODE_ENV, ACCESS_TOKEN_SECRET, ACCESS_TOKEN_LIFE, DATABASE_URI } = process.env;

const env = NODE_ENV || 'staging';
const accessTokenSecret = ACCESS_TOKEN_SECRET || 'pam-accessToken';
const accessTokenLife = ACCESS_TOKEN_LIFE || '30m';
// const urlDatabase = 'mongodb://localhost:27017/pamProfile';
const urlDatabase = 'mongodb://pnp0831:phat31897@ds127892.mlab.com:27892/pam-profile-staging';
const databaseUri = NODE_ENV === 'development' ? urlDatabase : DATABASE_URI;

const config = {
  env,
  accessTokenLife,
  accessTokenSecret,
  databaseUri,
};

export default config;
