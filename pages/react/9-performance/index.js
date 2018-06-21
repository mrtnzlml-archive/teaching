// @flow

import * as React from 'react';

type Props = {||};

type State = {|
  notImportant: number
|};

// This is just a normal component but it re-renders every second for some
// reason. The reason is not important now. There is also Translation component
// and this component is being re-rendered every time as you can see in the
// console. But that's not necessary (component is not changing at all). Can
// we somehow improve this?
export default class App extends React.Component<Props, State> {
  state = {
    notImportant: -1
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        notImportant: Math.random()
      });
    }, 1000);
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.state.notImportant}</div>
        <Translation passThrough="String to be translated" />
        {/*<OptimizedTranslation passThrough="String to be translated" />*/}
        {/*<PureTranslation passThrough="String to be translated" />*/}

        {/* But be careful when doing this! (well, never do it) */}
        {/*
          <PureTranslation
            passThrough="String to be translated"
            // nonScalar={() => {}}
            // style={{}}
          />
        */}
      </React.Fragment>
    );
  }
}

type TranslationProps = {|
  +passThrough: string
|};

function Translation(props: TranslationProps) {
  const style = {
    color: 'red'
  };

  console.warn('RENDERING TRANSLATION');

  return <div style={style}>{props.passThrough}</div>;
}

// One way how to get rid of unnecessary re-renders is to implement method
// called "shouldComponentUpdate". You can compare there previous props and
// state and decide whether you want to update (re-render) the component
// or not.
class OptimizedTranslation extends React.Component<TranslationProps> {
  shouldComponentUpdate = nextProps => {
    return nextProps.passThrough !== this.props.passThrough;
  };

  render() {
    const style = {
      color: 'red'
    };

    console.warn('RENDERING OPTIMIZED_TRANSLATION');

    return <div style={style}>{this.props.passThrough}</div>;
  }
}

// Better way how to do it is to use "React.PureComponent" instead of
// "React.Component". This basically implements the "shouldComponentUpdate".
// But be careful! It uses only shallow comparision.
class PureTranslation extends React.PureComponent<TranslationProps> {
  render() {
    const style = {
      color: 'red'
    };

    console.warn('RENDERING PURE_TRANSLATION');

    return <div style={style}>{this.props.passThrough}</div>;
  }
}
