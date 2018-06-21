import React, { Component } from 'react';

// This component accepts so called "props". Properties are basically
// parameters flowing from the component above (App in this case).
// Props always flow down - never up.
function Header(props) {
  return <header>{props.title}</header>;
}

class App extends Component {
  render = () => {
    return (
      <div>
        {/* Component property looks very similar to HTML attribute: */}
        <Header title={<h1>Welcome to React</h1>} />
        <p>
          To get started, edit <code>pages/react/3-props/index.js</code> and
          save to reload.
        </p>
      </div>
    );
  };
}

export default App;
