import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';
import { Button } from '../';

const SelectionBarLeft = props => (
  <Fragment>
    <Button
      clickHandler={props.selectAll}
      types={['link-default']}
      className="selection-bar__all"
    >
      Select all
    </Button>
    <span className="selection-bar__count">{props.length}</span>
    <span className="selection-bar__type">
      {pluralize(props.type, props.length)} selected
    </span>
  </Fragment>
);

SelectionBarLeft.propTypes = {
  selectAll: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default SelectionBarLeft;
