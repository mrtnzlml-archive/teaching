import React, { Component } from 'react';

// This is simple component with name "App". Components must always start
// with the capital letter to make a difference from HTML tags.
class App extends Component {
  // Every component must always implement "render" function. This function
  // returns other components or HTML tags. It may also return "null" in
  // case there is nothing to render.
  render = () => {
    return (
      // You always have to return single element (or "null") from the render
      // function. You can also return an array of elements.
      <div>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>pages/react/1-hello-world/index.js</code>{' '}
          and save to reload.
        </p>
      </div>
    );
  };
}

// Remember to always export the component from the file!
export default App;
