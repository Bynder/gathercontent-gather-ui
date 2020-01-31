import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Row from 'react-bootstrap/lib/Row';
import SelectionBarAction from './SelectionBarAction';
import SelectionBarDivider from './SelectionBarDivider';
import SelectionBarCancel from './SelectionBarCancel';
import SelectionBarInformation from './SelectionBarInformation';
import SelectionBarActions from './SelectionBarActions';
import SelectionBarCounter from './SelectionBarCounter';

const SelectionBar = props => {
  const classNames = cx('selection-bar', {
    'selection-bar--fixed': props.fixed,
    'selection-bar--auto-hide': props.autoHide,
    'has-selected': props.hasSelected
  });

  return (
    <Row className={classNames}>
      {props.children}
      {props.onCancel && <SelectionBarCancel onCancel={props.onCancel} />}
    </Row>
  );
};

SelectionBar.Information = SelectionBarInformation;
SelectionBar.Action = SelectionBarAction;
SelectionBar.Actions = SelectionBarActions;
SelectionBar.Divider = SelectionBarDivider;
SelectionBar.Counter = SelectionBarCounter;

SelectionBar.propTypes = {
  hasSelected: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  fixed: PropTypes.bool,
  autoHide: PropTypes.bool,
  onCancel: PropTypes.func
};

SelectionBar.defaultProps = {
  fixed: false,
  autoHide: false,
  onCancel: undefined
};

export default SelectionBar;
