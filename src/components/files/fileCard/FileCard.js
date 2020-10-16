import React from 'react';
import { func } from 'prop-types';
import Card from 'lib/Card';

function FileCard({ thumb, meta, ...cardProps }) {
  return (
    <Card {...cardProps}>
      <Card.Content>
        {thumb}
      </Card.Content>

      <Card.Content>
        {meta}
      </Card.Content>
    </Card>
  )
}

FileCard.propTypes = {
  ...Card.propTypes,
  meta: func.isRequired,
  thumb: func.isRequired,
};

export { FileCard };
