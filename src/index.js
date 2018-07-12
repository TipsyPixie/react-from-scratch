// @flow
import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
// import Debug from 'debug';

dotenv.config(
  { path: path.resolve(__dirname, '../.env') }
);
const app = express();

// debug('asdf');
const debug = require('debug')('react-from-scratch:server');
debug('asdf');

const port: number = parseInt(process.env.PORT) || 3000;
app.set('port', port);

const server = app.listen(port);
server.on('listening', onListening);

function onListening(param: void): void {
  debug('Listening on ' + app.port);
}
