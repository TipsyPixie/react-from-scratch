import express from 'express';
import path from 'path';
import httpError from 'http-errors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import favicon from 'serve-favicon';
import ExpressGraphQL from 'express-graphql';
import graphQLSchema from './schema';

const app = express();

/**
 * Setup paths for public resources and view templates
 */
const rootPath = path.resolve(__dirname, '..');

const staticPath = path.resolve(rootPath, 'public');
app.use(express.static(staticPath));

const faviconPath = path.resolve(staticPath, 'assets', 'favicon.ico');
app.use(favicon(faviconPath));

const viewPath = path.resolve(rootPath, 'views');
app.set('views', viewPath);
app.set('view engine', 'pug');

/**
 * Setup body parser and cookie parser
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

/**
 * Setup request logger
 */
const logger = morgan('combined');
app.use(logger);

/**
 * Setup routes
 */

const GraphQLServer = ExpressGraphQL({
  schema: graphQLSchema,
  graphiql: (app.get('env') === 'development')
});

app.get('/graphql', GraphQLServer);
app.post('/graphql', GraphQLServer);

app.get('/', (req, res) => {
  res.render('index');
});

/**
 * 'Not found' for unhandled urls
 */
app.use((req, res, next) => {
  next(httpError(404));
});

/**
 * Setup error handler
 */
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.render('error', {errorCode: err.status, errorMessage: err.message});
});

export default app;
