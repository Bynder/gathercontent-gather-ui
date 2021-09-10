/* eslint-disable jsx-a11y/click-events-have-key-events jsx-a11y/no-noninteractive-element-interactions  */

import React from 'react';
import Tippy from '@tippyjs/react';

function TooltipWrapper({
  tooltipText,
  children,
  theme,
  placement,
  wrapperClassName,
  tabbable,
  id,
  onClick,
  ...rest
}) {
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
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        id={id}
        className={`tooltip-wrapper__child ${wrapperClassName}`}
        tabIndex={tabIndex}
        onClick={onClick}
      >
        {children}
      </button>
    </Tippy>
  );
}

TooltipWrapper.defaultProps = {
  className: '',
  placement: 'bottom',
  trigger: 'mouseenter focus',
  tooltipText: '',
  wrapperClassName: '',
  tabbable: true,
  theme: 'dark',
  onClick: () => {}
};

export default TooltipWrapper;
