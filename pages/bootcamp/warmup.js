import React from 'react';

// Introduce into (not detailed):
//
// 1. memory leaks (show how to fix it)
// 2. lifecycle methods
// 3. setState with prevState

class Counter extends React.Component {
  state = {
    count: 0
  };

  componentDidMount = () => {
    this.timerID = setInterval(() => {
      console.warn(`TIMER_ID:${this.timerID}`, this.state.count);

      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }, 1000);
  };

  render() {
    return <div>{this.state.count}</div>;
  }
}

export default class App extends React.Component {
  state = {
    counterMounted: true
  };

  toggleCounter = () => {
    this.setState(prevState => ({
      counterMounted: !prevState.counterMounted
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleCounter}>Toggle Counter!</button>
        {this.state.counterMounted && <Counter />}
      </div>
    );
  }
}
