const prpl = require('prpl-server');
const express = require('express');
const helmet = require('helmet');
const app = express();
const server = require('http').createServer(app);
app.use(helmet());
app.get('/*', prpl.makeHandler('./build/', {
  builds: [
    {name: 'es5-bundled', browserCapabilities: ['es2015']},
    {name: 'es6-bundled', browserCapabilities: ['es2015']},
    {name: 'esm-bundled', browserCapabilities: ['es2015']},
  ],
}));
server.listen(8088, '0.0.0.0');
