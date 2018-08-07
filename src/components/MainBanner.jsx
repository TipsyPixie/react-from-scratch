import * as React from 'react';
import '../stylesheets/MainBanner.sass';

type Props = {
  text: string
};


class MainBanner extends React.Component<Props> {
  static defaultProps: Props = {
    text: ''
  };

  render = () => {
    return (
      <div className='MainBanner'>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}

export default MainBanner;
