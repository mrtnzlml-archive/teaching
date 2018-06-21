// @flow

import * as React from 'react';

const Context = React.createContext('UNDEFINED by default!');

export default class App extends React.Component<{||}> {
  panic = () => {
    // This will re-render this App component. But Fences are not going to
    // be re-rendered (see below).
    this.forceUpdate();
  };

  render = () => {
    return (
      <div>
        <button onClick={this.panic}>Re-render this component!</button>
        <Context.Provider
          value={{
            test: 'fixed value'
          }}
        >
          <Fence>
            <Fence>
              <Fence>
                <DeepComponent />
              </Fence>
            </Fence>
          </Fence>
        </Context.Provider>
      </div>
    );
  };
}

type FenceType = {|
  +children: React.Node
|};

class Fence extends React.Component<FenceType> {
  shouldComponentUpdate = () => {
    // Fence will never re-render thanks to this.
    return false;
  };

  render = () => {
    console.error('RENDERING FENCE');
    return this.props.children;
  };
}

class DeepComponent extends React.Component<{||}> {
  shouldComponentUpdate = () => {
    // DeepComponent will never re-render thanks to this.
    return false;
  };

  render = () => {
    console.error('RENDERING DEEP_COMPONENT');
    return (
      <Context.Consumer>
        {contextValue => {
          // But this is still re-rendering. Can you find a reason why and fix it?
          console.error('RENDERING CONTEXT CONSUMER');
          return <pre>{JSON.stringify(contextValue, null, 2)}</pre>;
        }}
      </Context.Consumer>
    );
  };
}
