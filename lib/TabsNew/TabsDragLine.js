import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

export function TabsDragLine({ side }) {
  const className = cx(`tab-drag-line absolute top-0 h-full z-10 ${side}`);

  return <span className={className} />;
}

TabsDragLine.propTypes = {
  side: string.isRequired
};
