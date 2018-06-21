// @flow

import * as React from 'react';

type DummyComponentProps = {||};

// Component can have life-cycle methods. You always have to use classes
// because there are no life-cycle methods in the functional components.
// Methods are going to be called in this order:
//
//  1. constructor
//  2. render
//  3. componentDidMount
//  4. componentWillUnmount
//
// There are other life-cycle methods but they are not so important at this point.
//
class DummyComponent extends React.Component<DummyComponentProps> {
  constructor(props) {
    super(props);
    console.warn('constructor');
  }

  componentDidMount = () => {
    console.warn('componentDidMount');
  };

  componentWillUnmount = () => {
    console.warn('componentWillUnmount');
  };

  render = () => {
    console.warn('render');
    // You always have to write the render function but you don't have to
    // render anything. There are many HTML tags like this. For example
    // <script />, <meta />, <link />, ...
    return null;
  };
}

type FetcherProps = {|
  +children: (null | string) => React.Node
|};

type State = {|
  fetchedData: null | string
|};

// Purpose of this method is to start fetching "after component DID MOUNT" and
// render the result. However, it doesn't care about the rendering - it uses
// function passed from the App component. This pattern is called "render
// props callback".
class Fetcher extends React.Component<FetcherProps, State> {
  state = {
    fetchedData: null
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        fetchedData: 'DATA LOADED - YAAY!'
      });
    }, 1000);
  };

  render = () => {
    return this.props.children(this.state.fetchedData);
  };
}

export default function App() {
  return (
    <Fetcher>
      {data => {
        if (data === null) {
          return (
            <React.Fragment>
              <DummyComponent />
              <div>Loading...</div>
            </React.Fragment>
          );
        }

        return <div>{data}</div>;
      }}
    </Fetcher>
  );
}
