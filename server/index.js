// @flow
import app from '../app';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, '../../.env')
});

const port: number = process.env.PORT && parseInt(process.env.PORT) || 3000;
app.set('port', port);

const server = app.listen(port);
server.on('listening', onListening);

function onListening(): void {
  console.log('Listening on ' + port);
}
