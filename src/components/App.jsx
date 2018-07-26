// @flow
import * as React from 'react';
import HeaderBar from './HeaderBar';
import '../stylesheets/App.sass';
import Counter from './Counter';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <div className='App'>
        <HeaderBar title='Welcome to React!'/>
        <Counter />
      </div>
    );
  }
}

export default App;
