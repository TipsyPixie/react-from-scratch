// @flow
import * as React from 'react';
import '../stylesheets/GlassyCard.sass';

type Props = {
  frontValue: string,
  backValue: string,
  transitionTime: number
};

type State = {
  flipped: boolean,
  inTransition: boolean
};

class GlassyCard extends React.Component<Props, State> {
  static defaultProps: Props = {
    frontValue: '',
    backValue: '',
    transitionTime: 0.5
  };

  state: State = {
    flipped: false,
    inTransition: false
  };

  flip = () => {
    this.setState(
      (prevState: State) => ({flipped: !(prevState.flipped)})
    );
  };

  handleClick = () => {
    if(!this.state.inTransition) {
      this.state.inTransition = true;
      this.flip();

      setTimeout(
        () => {
          this.state.inTransition = false;
          },
        this.props.transitionTime * 1000
      );
    }
  };

  render() {
    return (
      <div className='GlassyCard'
           onClick={this.handleClick}
           style={{
             WebKitTransition: `-webkit-transform ${this.props.transitionTime}s`,
             transition: `transform ${this.props.transitionTime}s`,
             WebkitTransform: (this.state.flipped)? 'rotateY(0deg)' : 'rotateY(360deg)',
             transform: (this.state.flipped)? 'rotateY(0deg)' : 'rotateY(360deg)'
           }}>
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
