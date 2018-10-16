import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CardContent = props => {
  const classNames = cx(`card__content ${props.className}`, {
    'card__content--bordered': props.bordered,
    'card__content--collapse': props.collapse
  });
  return <div className={classNames}>{props.children}</div>;
};

CardContent.propTypes = {
  className: PropTypes.string,
  collapse: PropTypes.bool,
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired
};

CardContent.defaultProps = {
  className: '',
  collapse: false,
  bordered: false
};

export default CardContent;
