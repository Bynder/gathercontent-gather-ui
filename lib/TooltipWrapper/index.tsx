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
}: any) {
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
        onClick={onClick}
        onKeyPress={onClick}
      >
        {children}
      </span>
    </Tippy>
  );
}

TooltipWrapper.defaultProps = {
  className: '',
  placement: 'top',
  trigger: 'mouseenter focus',
  tooltipText: '',
  wrapperClassName: '',
  tabbable: true,
  theme: 'dark',
  onClick: () => {}
};

export default TooltipWrapper;
