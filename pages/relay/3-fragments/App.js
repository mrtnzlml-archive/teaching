import React from 'react';
import { graphql } from 'react-relay';

import QueryRenderer from '../2-query-renderer/QueryRenderer';
import Location from './Location';

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        query={graphql`
          query AppQuery {
            allLocations(first: 10) {
              edges {
                node {
                  id
                  ...Location
                }
              }
            }
          }
        `}
        render={props => {
          const edges = props.allLocations.edges;
          return (
            <pre>
              {edges.map(edge => {
                const node = edge.node;
                return <Location key={node.id} data={node} />;
              })}
            </pre>
          );
        }}
      />
    );
  }
}
