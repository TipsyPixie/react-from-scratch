import app from '../app';
import router from '../routes';
import httpError from 'http-errors';

app.use('/', router);

app.use((req, res, next) => {
  next(httpError(404));
});

app.use((err, req, res, next) => {
  console.log(err.stack);
});

const port: number = process.env.PORT && parseInt(process.env.PORT) || 3000;
app.set('port', port);

const server = app.listen(port);
server.on('listening', onListening);

function onListening(): void {
  console.log('Listening on ' + port);
}
