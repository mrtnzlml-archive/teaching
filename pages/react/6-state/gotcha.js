import React, { Component } from 'react';

// other gotchas (common mistakes):
//  - PureComponent and arrow functions (or inline styles)
//  - setInterval memory leak

export default class App extends Component {
  state = {
    filterOne: false,
    filterTwo: false,
    filterThree: false,
    score: 0
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.filterOne) {
      this.setState({ score: this.state.score + 10 });
    }

    if (this.state.filterTwo) {
      this.setState({ score: this.state.score + 15 });
    }

    if (this.state.filterThree) {
      this.setState({ score: this.state.score + 20 });
    }
  };

  handleSubmitFixed = event => {
    event.preventDefault();

    if (this.state.filterOne) {
      this.setState(prevState => ({ score: prevState.score + 10 }));
    }

    if (this.state.filterTwo) {
      this.setState(prevState => ({ score: prevState.score + 15 }));
    }

    if (this.state.filterThree) {
      this.setState(prevState => ({ score: prevState.score + 20 }));
    }
  };

  render = () => {
    return (
      <React.Fragment>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={({ target }) =>
                this.setState({ filterOne: target.checked })
              }
              type="checkbox"
            />{' '}
            +10
          </div>
          <div>
            <input
              onChange={({ target }) =>
                this.setState({ filterTwo: target.checked })
              }
              type="checkbox"
            />{' '}
            +15
          </div>
          <div>
            <input
              onChange={({ target }) =>
                this.setState({ filterThree: target.checked })
              }
              type="checkbox"
            />{' '}
            +20
          </div>
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  };
}
