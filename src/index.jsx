// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root: ?HTMLElement = document.getElementById('root');

(root != null) && ReactDOM.render(<App/>, root);
