// @flow

import * as React from 'react';

// This is Flow type describing types of the expected props. It's used
// for static analysis of the code so we can catch some errors before
// even running the code.
type HeaderPropsType = {|
  +title: React.Element<'div'>
|};

function Header(props: HeaderPropsType) {
  return <header>{props.title}</header>;
}

// This essentially says we expect no props.
type AppPropsType = {||};

class App extends React.Component<AppPropsType> {
  render = () => {
    return (
      <div>
        {/*
          * Try to run command "yarn flow". You'll see there is an error
          * in our code. Can you please send a PR to fix it? :)
          */}
        <Header title={<h1>Welcome to React</h1>} />
        <p>
          To get started, edit <code>pages/react/4-typechecking/index.js</code>{' '}
          and save to reload.
        </p>
      </div>
    );
  };
}

export default App;
