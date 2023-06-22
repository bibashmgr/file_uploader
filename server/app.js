const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// routes
const homeRoutes = require('./routes/home.route.js');

// config
const config = require('./utils/config.js');

const app = express();

app.use(
  cors({
    origin: config.clientBaseUrl,
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  bodyParser.json({
    extended: true,
    verify: (req, res, buf, encoding) => {
      if (!req.is('application/json')) {
        return res.status(400).json({
          data: null,
          success: false,
          message: 'Invalid Request',
        });
      }

      try {
        JSON.parse(buf.toString(encoding));
      } catch (err) {
        logger.error('Invalid Request');
        return res.status(400).json({
          data: null,
          success: false,
          message: 'Invalid Request',
        });
      }
    },
  })
);

app.use('/', homeRoutes);

const httpServer = http.createServer(app);

mongoose.set('strictQuery', true);
mongoose
  .connect(config.mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database Connected');
    httpServer.listen(config.portNumber, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(`Server running on ${config.serverBaseUrl}`);
      }
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
