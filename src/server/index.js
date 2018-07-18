// @flow
import dotenv from 'dotenv';
import path from 'path';

dotenv.config(
  { path: path.resolve(__dirname, '../.env') }
);

const express = require('express');
const app = express();

const debug = require('debug')('debug');

const port: number = parseInt(process.env.PORT) || 3000;
app.set('port', port);

const server = app.listen(port);
server.on('listening', onListening);

function onListening(param: void): void {
  debug('Listening on ' + app.port);
}
