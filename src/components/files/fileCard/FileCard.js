import React from 'react';
import { bool, func } from "prop-types";
import Card from 'lib/Card';
import { createClassNames } from "helpers/createClassNames";

function FileCard({ thumb, meta, insetMeta, ...cardProps }) {
  const cardClassNames = createClassNames('file-card group overflow-hidden', cardProps);

  const metaContainerClassNames = createClassNames('', {}, {
    'absolute bottom-0 w-full bg-white -mb-40 group-hover:mb-0 transition-mb duration-200': insetMeta,
  });

  return (
    <Card
      {...cardProps}
      className={cardClassNames}
      innerClassNames="relative overflow-hidden rounded"
    >
      <Card.Content collapse>
        {thumb}
      </Card.Content>

      <Card.Content className={metaContainerClassNames}>
        {meta}
      </Card.Content>
    </Card>
  )
}

FileCard.propTypes = {
  ...Card.propTypes,
  meta: func.isRequired,
  thumb: func.isRequired,
  insetMeta: bool,
};

FileCard.defaultProps = {
  insetMeta: false,
}

export { FileCard };
