import React from 'react';
import cx from 'classnames';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { TooltipWrapper } from 'lib';

function ProgressUnit({
  className,
  color,
  percent,
  name,
  filterLink
}: any) {
  const classes = cx(['progress__unit', className]);
  const style = { width: `${percent}%` };
  if (color !== '') {
    // @ts-expect-error TS(2339): Property 'backgroundColor' does not exist on type ... Remove this comment to see the full error message
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
  );
}

ProgressUnit.defaultProps = {
  className: ''
};

export default ProgressUnit;
