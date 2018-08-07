// @flow
import * as React from 'react';
import HeaderBar from './HeaderBar';
import MainBanner from './MainBanner';
import '../stylesheets/App.sass';
import FooterBar from './FooterBar';
import Content from './Content';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <div className='App'>
        <HeaderBar/>
        <Content/>
        <FooterBar/>
      </div>
    );
  }
}

export default App;
