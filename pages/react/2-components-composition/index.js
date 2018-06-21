import React, { Component } from 'react';

// Even though this is a function it's also a component. It also must start
// with the capital letter.
function Header() {
  return (
    <header>
      <h1>Welcome to React</h1>
    </header>
  );
}

function Body() {
  return (
    <p>
      To get started, edit{' '}
      <code>pages/react/2-components-composition/index.js</code> and save to
      reload.
    </p>
  );
}

// This is how react works in reality. We are creating hundreds and thousands
// of small components creating the whole application.
class App extends Component {
  render = () => {
    return (
      <div>
        {/* I am using the component here (vvv) */}
        <Header />
        <Body />
      </div>
    );
  };
}

export default App;
