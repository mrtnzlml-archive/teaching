// @flow

import * as React from 'react';

const defaultContextValue = {
  aaa: 111,
  bbb: 222,
  ccc: 333
};

// Default value is necessary when we want to be sure the component will
// work correctly even outside of the context provider.
const Context = React.createContext(defaultContextValue);

// App is a top-level component providing context down to the components
// bellow.
export default function App() {
  return (
    <Context.Provider
      value={{
        aaa: 333,
        bbb: 222,
        ccc: 111
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
  );
}

// Props do not flow through this component at all (only the child). Are values
// are in the context and available in the consumer bellow.
function Fence(props) {
  console.warn(props);
  return props.children;
}

// Question: how would you achieve the same effect without using the Context?
function DeepComponent() {
  return (
    <Context.Consumer>
      {contextValue => <pre>{JSON.stringify(contextValue, null, 2)}</pre>}
    </Context.Consumer>
  );
}
