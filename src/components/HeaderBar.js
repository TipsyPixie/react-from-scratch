import * as React from 'react';
import '../stylesheets/HeaderBar.sass';

type Props = {
  title: string,
  color: string
};

class HeaderBar extends React.Component<Props> {
  static defaultProps = {
    color: '#00ff99'
  };

  render() {
    return (
      <div className='HeaderBar' style={{backgroundColor: this.props.color}}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default HeaderBar;
