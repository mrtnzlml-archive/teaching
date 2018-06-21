// @flow

import React, { Component } from 'react';

type Props = {||};

type State = {|
  counter: number
|};

class App extends Component<Props, State> {
  state = {
    counter: 0
  };

  increaseCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  decreaseCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };

  render = () => {
    return (
      <React.Fragment>
        <header>
          <h1>{this.state.counter}</h1>
        </header>
        <button onClick={this.increaseCounter}>Increase</button>
        <button onClick={this.decreaseCounter}>Decrease</button>
      </React.Fragment>
    );
  };
}

export default App;
