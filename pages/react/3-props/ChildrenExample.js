import React, { Component } from 'react';

function Header(props) {
  return <header>{props.children}</header>;
}

class App extends Component {
  render = () => {
    return (
      <div>
        <Header children={<h1>Welcome to React 1</h1>} />

        {/* Lines 16-18 are equivalent to the line 11. Property "children" has
          * special meaning in React but the behavior is still the same.
          */}
        <Header>
          <h1>Welcome to React 2</h1>
        </Header>

        <p>
          To get started, edit{' '}
          <code>pages/react/3-props/ChildrenExample.js</code> and save to
          reload.
        </p>
      </div>
    );
  };
}

export default App;
