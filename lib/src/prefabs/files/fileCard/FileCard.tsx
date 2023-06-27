import React from 'react';
import { bool, node } from 'prop-types';
import cx from 'classnames';
// @ts-expect-error TS(2307): Cannot find module 'lib/src/components/card/Card' ... Remove this comment to see the full error message
import { Card } from 'lib/src/components/card/Card';

function FileCard({
  preview,
  meta,
  controls,
  insetMeta,
  children,
  size,
  innerClassName,
  ...cardProps
}: any) {
  const cardClassNames = cx('file-card group', cardProps.className, {
    'w-full': size !== 'thumbnail',
    'w-8 h-8': size === 'thumbnail',
    'file-card-inset-meta': insetMeta
  });

  return (
    <Card
      {...cardProps}
      className={cardClassNames}
      innerClassNames={`relative overflow-hidden rounded ${innerClassName}`}
    >
      <Card.Content className="p-0">{preview}</Card.Content>

      {meta && <Card.Content className="file-card-meta">{meta}</Card.Content>}

      {controls && <Card.Controls>{controls}</Card.Controls>}
      {children}
    </Card>
  );
}

FileCard.propTypes = {
  meta: node,
  controls: node,
  insetMeta: bool,
  preview: node
};

FileCard.defaultProps = {
  insetMeta: false,
  meta: null,
  controls: null,
  preview: null
};

export { FileCard };
