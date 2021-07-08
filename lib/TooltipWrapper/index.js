import React, { useEffect, useRef } from 'react';
import cx from 'classnames';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';

function TooltipWrapper({ className, wrapperClassName, placement, trigger, id, tooltipText, children, hide, alignLeft, clickable, manual, show, tabbable, ...rest }) {
  const tooltipRef = useRef();

  useEffect(() => {
    if (hide && tooltipRef.current) {
      tooltipRef.current.hide();
    }
  }, [hide]);

  useEffect(() => {
    if (show && tooltipRef.current) {
      tooltipRef.current.show();
    }
  }, [show]);

  if (!tooltipText) {
    return children;
  }

  const Overlay = (
    <Tooltip className={className} id={id}>
      {tooltipText}
    </Tooltip>
  );

  const wrapperChildClassNames = cx(
    `tooltip-wrapper__child ${wrapperClassName}`,
    {
      'tooltip-wrapper__child--clickable': clickable,
      'tooltip-wrapper__child--align-left': alignLeft
    }
  );

  const tabIndex = tabbable ? 0 : -1;

  return (
    <OverlayTrigger
      {...rest}
      trigger={manual ? null : trigger}
      overlay={Overlay}
      ref={tooltipRef}
      placement={placement}
    >
      <span
        className={wrapperChildClassNames}
        tabIndex={tabIndex}
        role="button"
      >
        {children}
      </span>
    </OverlayTrigger>
  )
}

TooltipWrapper.defaultProps = {
  className: '',
  placement: 'bottom',
  trigger: ['hover', 'focus'],
  hide: false,
  tooltipText: '',
  wrapperClassName: '',
  alignLeft: false,
  clickable: false,
  manual: false,
  show: null,
  tabbable: true
};

export default TooltipWrapper;
