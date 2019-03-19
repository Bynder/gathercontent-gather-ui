import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';

class TooltipWrapper extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.hide !== nextProps.hide && nextProps.hide) {
      if (this.tooltipOverlay) {
        this.tooltipOverlay.hide();
      }
    }
  }

  render() {
    const {
      id,
      className,
      tooltipText,
      children,
      hide,
      wrapperClassName,
      ...rest
    } = this.props;
    if (!tooltipText) {
      return children;
    }
    const overlay = (
      <Tooltip className={className} id={id}>
        {tooltipText}
      </Tooltip>
    );
    return (
      <OverlayTrigger
        {...rest}
        overlay={overlay}
        ref={tooltipOverlay => {
          this.tooltipOverlay = tooltipOverlay;
        }}
      >
        <span className={`tooltip-wrapper__child ${wrapperClassName}`}>
          {children}
        </span>
      </OverlayTrigger>
    );
  }
}

TooltipWrapper.propTypes = {
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  placement: PropTypes.string,
  trigger: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  tooltipText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  hide: PropTypes.bool
};

TooltipWrapper.defaultProps = {
  className: '',
  placement: 'bottom',
  trigger: ['hover', 'focus'],
  hide: false,
  tooltipText: '',
  wrapperClassName: ''
};

export default TooltipWrapper;
