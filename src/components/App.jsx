// @flow
import * as React from 'react';
import '../stylesheets/App.sass';
import GlassyCard from './GlassyCard';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <div className='App'>
        <GlassyCard frontValue={'HEAD'} backValue={'TAIL'}/>
      </div>
    );
  }
}

export default App;
