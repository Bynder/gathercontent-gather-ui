import React from 'react';
import { bool, node } from 'prop-types';
import Card from 'lib/Card';
import { createComponentClassNames } from 'helpers/createComponentClassNames';

function FileCard({ preview, meta, insetMeta, children, ...cardProps }) {
  const cardClassNames = createComponentClassNames(
    'file-card group',
    cardProps
  );

  const metaContainerClassNames = createComponentClassNames(
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
      <Card.Content collapse>{preview}</Card.Content>

      <Card.Content className={metaContainerClassNames}>{meta}</Card.Content>

      {children}
    </Card>
  );
}

FileCard.propTypes = {
  ...Card.propTypes,
  meta: node.isRequired,
  preview: node.isRequired,
  insetMeta: bool,
  children: node
};

FileCard.defaultProps = {
  insetMeta: false,
  children: false
};

export { FileCard };
