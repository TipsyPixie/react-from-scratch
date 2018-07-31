// @flow
import * as React from 'react';
import '../stylesheets/GlassyCard.sass';

type Props = {
  frontValue: string,
  backValue: string
};

type State = {
  flipped: boolean
};

class GlassyCard extends React.Component<Props, State> {
  static defaultProps: Props = {
    frontValue: '',
    backValue: ''
  };

  state: State = {
    flipped: false
  };

  flip() {
    this.setState(
      (prevState: State) => ({flipped: !(prevState.flipped)})
    );
    // animate?
  };

  handleClick() {
    this.flip();
  };

  render() {
    return (
      <div className='GlassyCard' onClick={this.handleClick}>
        <span>
          {
            this.state.flipped ? this.props.backValue : this.props.frontValue
          }
        </span>
      </div>
    );
  }
}

export default GlassyCard;
