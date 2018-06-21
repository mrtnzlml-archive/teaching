import React from 'react';
import { graphql } from 'react-relay';

import QueryRenderer from './QueryRenderer';

function Example(props) {
  const edges = props.allLocations.edges;
  return (
    <code>
      {edges.map(edge => {
        const node = edge.node;
        return node.slug;
      })}
    </code>
  );
}

export default function ExampleContainer() {
  return <QueryRenderer query={query} render={Example} />;
}

const query = graphql`
  query ExampleQuery {
    allLocations {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`;
