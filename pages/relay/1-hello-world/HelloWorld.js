import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../utils/Environment';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query HelloWorldQuery {
            allLocations {
              edges {
                node {
                  id
                  slug
                }
              }
            }
          }
        `}
        render={({ props, error }) => {
          if (!props) {
            return <div>Loading...</div>;
          }

          if (error) {
            return <div>Error!</div>;
          }

          const edges = props.allLocations.edges;
          return (
            <code>
              {edges.map(edge => {
                const node = edge.node;
                return node.slug;
              })}
            </code>
          );
        }}
      />
    );
  }
}
