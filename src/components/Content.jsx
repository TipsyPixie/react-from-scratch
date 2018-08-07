import * as React from 'react'
import '../stylesheets/Content.sass';
import MainBanner from './MainBanner';

class Content extends React.Component {
  render = () => {
    return (
      <div className='Content'>
        <MainBanner text='React From Scratch'/>
      </div>
    )
  }
}

export default Content;
