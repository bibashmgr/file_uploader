require('dotenv').config();

// environment_variables
const nodeEnv = process.env.NODE_ENV;
const portNumber = process.env.PORT_NUMBER || 9999;
const clientBaseUrl = process.env.CLIENT_BASE_URL;
const serverBaseUrl = process.env.SERVER_BASE_URL;
const mongodbUrl = process.env.MONGODB_URL;

module.exports = {
  nodeEnv,
  portNumber,
  clientBaseUrl,
  serverBaseUrl,
  mongodbUrl,
};
