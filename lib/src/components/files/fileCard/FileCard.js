import React from 'react';
import { bool, node } from 'prop-types';
import Card from 'lib/Card';
import { createClassNames } from 'helpers/createClassNames';

function FileCard({ thumb, meta, insetMeta, children, ...cardProps }) {
  const cardClassNames = createClassNames('file-card group', cardProps);

  const metaContainerClassNames = createClassNames(
    'border border-neutral-90 border-solid border-b-0 border-l-0 border-r-0',
    {},
    {
      'absolute bottom-0 w-full bg-white -mb-40 group-hover:mb-0 transition-mb duration-200': insetMeta
    }
  );

  return (
    <Card
      {...cardProps}
      className={cardClassNames}
      innerClassNames="relative shadow-small overflow-hidden rounded"
    >
      <Card.Content collapse>{thumb}</Card.Content>

      <Card.Content className={metaContainerClassNames}>{meta}</Card.Content>

      {children}
    </Card>
  );
}

FileCard.propTypes = {
  ...Card.propTypes,
  meta: node.isRequired,
  thumb: node.isRequired,
  insetMeta: bool,
  children: node
};

FileCard.defaultProps = {
  insetMeta: false,
  children: false
};

export { FileCard };
