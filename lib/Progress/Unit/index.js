import React from 'react';
import cx from 'classnames';
import { TooltipWrapper } from 'lib';

function ProgressUnit({ className, color, percent, name, filterLink }) {

  const classes = cx(['progress__unit', className]);
  const style = { width: `${percent}%` };
  if (color !== '') {
    style.backgroundColor = color;
  }

  const tooltipText = `${name} (${Math.round(percent)}%)`;

  return (
    <TooltipWrapper
      tooltipText={tooltipText}
      placement="top"
      wrapperClassName="inline"
    >
      <a href={filterLink} className={classes} style={style}>
        <div title={name} />
      </a>
    </TooltipWrapper>
  )
}

ProgressUnit.defaultProps = {
  className: ''
};

export default ProgressUnit;
