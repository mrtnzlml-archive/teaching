import React from 'react';
import Relay from 'react-relay';

import environment from '../utils/Environment';

export default function QueryRenderer(props) {
  return (
    <Relay.QueryRenderer
      environment={environment}
      query={props.query}
      render={({ props: rendererProps, error }) => {
        if (!rendererProps) {
          return <div>Loading...</div>;
        }

        if (error) {
          return <div>Error!</div>;
        }

        return props.render(rendererProps);
      }}
    />
  );
}
