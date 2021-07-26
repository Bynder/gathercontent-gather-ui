import React from 'react';
import cx from 'classnames';
import Tippy from '@tippyjs/react';

function TooltipWrapper({ tooltipText, children, theme, placement, wrapperClassName, tabbable, id, ...rest }) {

  if (!tooltipText) {
    return children;
  }

  const tabIndex = tabbable ? 0 : -1;

  return (
    <Tippy
      content={tooltipText}
      animation="shift-toward"
      arrow={false}
      theme={theme}
      placement={placement}
      {...rest}
    >
      <span
        id={id}
        className={`tooltip-wrapper__child ${wrapperClassName}`}
        tabIndex={tabIndex}
        role="button"
      >
        {children}
      </span>
    </Tippy>
  )
}

TooltipWrapper.defaultProps = {
  className: '',
  placement: 'bottom',
  trigger: 'mouseenter focus',
  tooltipText: '',
  wrapperClassName: '',
  tabbable: true,
  theme: 'dark'
};

export default TooltipWrapper;
