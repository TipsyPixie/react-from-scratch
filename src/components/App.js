import * as React from 'react';
import HeaderBar from './HeaderBar';
import '../stylesheets/App.sass';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <HeaderBar title='Welcome to React!'/>
      </div>
    );
  }
}

export default App;
