const config = require('config');
const path = require('path');
const express = require('express');
const cors = require('cors');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../configs/config.hot');
const api = require('./api').api();
const database = require('./db');

const app = express();
const compiler = webpack(webpackConfig);

app.use(cors());
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/api/v1', api);

app.listen(config.uri.port, config.hostname, (error) => {
  if (error) {
    console.error(error);
  } else {
    database.connect(config.database.connectionString())
      .then(() => console.info(`==> 🌎 App running on http://${config.uri.hostname}:${config.uri.port}/`));
  }
});
