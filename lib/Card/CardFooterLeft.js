import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CardFooterLeft = props => {
  const classNames = cx(`card__footer-left ${props.className}`, {
    'card__footer-left--collapse': props.collapse
  });
  return <div className={classNames}>{props.children}</div>;
};

CardFooterLeft.propTypes = {
  className: PropTypes.string,
  collapse: PropTypes.bool,
  children: PropTypes.node.isRequired
};

CardFooterLeft.defaultProps = {
  className: '',
  collapse: false
};

export default CardFooterLeft;
