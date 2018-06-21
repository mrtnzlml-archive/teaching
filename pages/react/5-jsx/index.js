import React, { Component } from 'react';

// This code is basically the same as you saw in "3-props" except
// it doesn't use JSX at all. This way you can actually see what's happening
// behind the scenes. It should be also clear now why you always have to
// import React even though it's not explicitly used. As you can see
// it's just a normal JavaScript.

function Header(props) {
  return React.createElement('header', null, props.title);
}

class App extends Component {
  render = () => {
    return React.createElement(
      'div',
      null,
      React.createElement(Header, {
        // Property "title" is passed down to the Header component here.
        // Props are the second parameter of the React.createElement call.
        title: React.createElement('h1', null, 'Welcome to React')
      }),
      React.createElement(
        'p',
        null,
        'To get started, edit ',
        React.createElement('code', null, 'pages/react/5-jsx/index.js'),
        ' and save to reload.'
      )
    );
  };
}

export default App;
