import React from 'react';
import { useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Row from 'react-bootstrap/lib/Row';
import SelectionBarAction from './SelectionBarAction';
import SelectionBarDivider from './SelectionBarDivider';
import SelectionBarCancel from './SelectionBarCancel';
import SelectionBarInformation from './SelectionBarInformation';
import SelectionBarActions from './SelectionBarActions';
import SelectionBarCounter from './SelectionBarCounter';

const SelectionBar = ({
  fixed,
  autoHide,
  hasSelected,
  children,
  animatableProperties,
  ...rest
}) => {
  const classNames = cx('selection-bar', {
    'selection-bar--fixed': fixed,
    'selection-bar--auto-hide': autoHide,
    'has-selected': hasSelected
  });

  const springStyle = useSpring({
    ...animatableProperties,
    config: {
      easing: easings.easeCubic,
      duration: 300
    }
  });

  return (
    <animated.div className={classNames} style={springStyle} {...rest}>
      <Row className="m-0">{children}</Row>
    </animated.div>
  );
};

SelectionBar.Information = SelectionBarInformation;
SelectionBar.Cancel = SelectionBarCancel;
SelectionBar.Action = SelectionBarAction;
SelectionBar.Actions = SelectionBarActions;
SelectionBar.Divider = SelectionBarDivider;
SelectionBar.Counter = SelectionBarCounter;

SelectionBar.propTypes = {
  hasSelected: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  fixed: PropTypes.bool,
  autoHide: PropTypes.bool,
  animatableProperties: PropTypes.shape()
};

SelectionBar.defaultProps = {
  fixed: false,
  autoHide: false,
  animatableProperties: {}
};

export default SelectionBar;
