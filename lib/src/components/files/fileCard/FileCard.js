import React from 'react';
import { bool, node } from 'prop-types';
import cx from 'classnames';
import { Card } from 'lib/src/components/card/Card';

function FileCard({ preview, meta, insetMeta, children, size, ...cardProps }) {
  const cardClassNames = cx('file-card group', cardProps.className, {
    'w-full': size !== 'thumbnail',
    'w-8 h-8': size === 'thumbnail'
  });

  const metaContainerClassNames = cx(
    'border border-neutral-90 border-solid border-b-0 border-l-0 border-r-0',
    {
      'absolute bottom-0 w-full bg-white -mb-40 group-hover:mb-0 transition-mb duration-200': insetMeta
    }
  );

  return (
    <Card
      {...cardProps}
      className={cardClassNames}
      innerClassNames="relative overflow-hidden rounded"
    >
      <Card.Content className="p-0">{preview}</Card.Content>

      {meta && (
        <Card.Content className={metaContainerClassNames}>{meta}</Card.Content>
      )}

      {children}
    </Card>
  );
}

FileCard.propTypes = {
  meta: node,
  insetMeta: bool,
  preview: node.isRequired
};

FileCard.defaultProps = {
  insetMeta: false,
  meta: null
};

export { FileCard };
