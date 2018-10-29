import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SelectionBarInformation from './SelectionBarInformation';
import SelectionBarCancel from './SelectionBarCancel';

const SelectionBar = props => {
  const length = props.selectedIds.length;
  const hasSelected = length !== 0;
  const classNames = cx('selection-bar', {
    'selection-bar--fixed': props.fixed,
    'selection-bar--auto-hide': props.autoHide,
    'has-selected': hasSelected
  });
  return (
    <Row className={classNames}>
      <Col
        xs={12}
        sm={4}
        md={3}
        className="selection-bar__section selection-bar__left"
      >
        <SelectionBarInformation
          length={length}
          type={props.type}
          selectAll={props.selectAll}
        />
      </Col>
      {hasSelected && (
        <Fragment>
          <Col
            xs={12}
            sm={5}
            md={6}
            className="selection-bar__section selection-bar__actions"
          >
            {props.children}
          </Col>
          <Col
            xsHidden
            sm={3}
            md={3}
            className="selection-bar__section selection-bar__right"
          >
            <SelectionBarCancel
              hasSelected={hasSelected}
              clearSelection={props.clearSelection}
            />
          </Col>
        </Fragment>
      )}
    </Row>
  );
};

SelectionBar.propTypes = {
  type: PropTypes.string.isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  children: PropTypes.node.isRequired,
  clearSelection: PropTypes.func.isRequired,
  selectAll: PropTypes.func.isRequired,
  fixed: PropTypes.bool,
  autoHide: PropTypes.bool
};

SelectionBar.defaultProps = {
  fixed: false,
  autoHide: false
};

export default SelectionBar;
