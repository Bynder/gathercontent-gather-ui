import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

export function TabDragLine({
  side
}: any) {
  const className = cx(`tab-drag-line absolute top-0 h-full z-10 ${side}`);

  return <span className={className} />;
}

TabDragLine.propTypes = {
  side: string.isRequired
};
