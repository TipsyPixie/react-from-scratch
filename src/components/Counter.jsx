// @flow
import * as React from 'react';

type Props = {
  backgroundColor: string,
  fontColor: string
};

type State = {
  count: number,
  temp: string
};

class Counter extends React.Component<Props, State> {
  static defaultProps = {
    backgroundColor: 'black',
    fontColor: 'white'
  };

  state = {
    count: 0,
    temp: 'hello'
  };

  handleIncrease = (): void => {
    this.setState(
      (prevState: State): { count: $ElementType<State, 'count'> } => ({
        count: (prevState.count < 99) ? prevState.count + 1 : prevState.count
      })
    );
  };

  handleDecrease = (): void => {
    this.setState(
      (prevState: State): { count: $ElementType<State, 'count'> } => ({
        count: (prevState.count > 0) ? prevState.count - 1 : prevState.count
      })
    )
  }
  ;

  render() {
    return (
      <div className='Counter'>
        <button onClick={this.handleIncrease}>+</button>
        <span style={{backgroundColor: this.props.backgroundColor, color: this.props.fontColor}}>{this.state.count}</span>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
