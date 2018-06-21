// @flow

import * as React from 'react';

type FetcherProps = {|
  +url: string,
  +variables: { [string]: string },
  +render: (data: null | Object) => React.Node
|};

type FetcherState = {|
  fetchedData: null | Object // null when not fetched yet
|};

// This is a generic fetcher. Notice the render method. We are not actually
// rendering there other components. This component is responsible only
// for data fetching. No more, no less...
class Fetcher extends React.Component<FetcherProps, FetcherState> {
  state = {
    fetchedData: null
  };

  // This fetcher will start fetching when it's mounted to the DOM.
  componentDidMount = async () => {
    const variables = Object.entries(this.props.variables)
      .map(([key, val]) => `${String(key)}=${String(val)}`)
      .join('&');

    const response = await fetch(this.props.url + '?' + variables);
    const jsonData: Object = await response.json();
    this.setState({
      fetchedData: jsonData
    });
  };

  render = () => {
    return this.props.render(this.state.fetchedData);
  };
}

type FlightsFetcherState = {|
  fetching: boolean
|};

// This component is a specific fetcher and it uses the generic "Fetcher"
// component inside. Responsibility of this component is to render the
// fetched data (but not to fetch them). Always try to keep the concerns
// separated.
export default class FlightsFetcher extends React.Component<
  {||},
  FlightsFetcherState
> {
  state = {
    fetching: false
  };

  fetchData = () => {
    this.setState({ fetching: true });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.fetching === false ? (
          <button type="submit" onClick={this.fetchData}>
            Fetch flights!
          </button>
        ) : (
          <Fetcher
            url="https://api.skypicker.com/flights"
            variables={{
              flyFrom: 'PRG',
              to: 'BCN',
              dateFrom: '08/08/2018',
              dateTo: '08/09/2018',
              limit: '1'
            }}
            render={data => {
              if (data === null) {
                return <div>Loading&hellip;</div>;
              }
              return (
                <React.Fragment>
                  <pre>{JSON.stringify(data)}</pre>
                  {/* We can call the fetcher again with changed parameters for example... */}
                  <FlightsFetcher />
                </React.Fragment>
              );
            }}
          />
        )}
        <style jsx>{`
          pre {
            overflow-x: scroll;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
