import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

function Location(props) {
  return JSON.stringify(props.data, null, 2);
}

const LocationContainer = createFragmentContainer(
  Location,
  graphql`
    fragment Location on Location {
      name
      slug
      timezone
      type
    }
  `
);

export default LocationContainer;
