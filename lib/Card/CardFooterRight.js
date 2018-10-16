import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CardFooterRight = props => {
  const classNames = cx(`card__footer-right ${props.className}`, {
    'card__footer-right--collapse': props.collapse
  });
  return <div className={classNames}>{props.children}</div>;
};

CardFooterRight.propTypes = {
  className: PropTypes.string,
  collapse: PropTypes.bool,
  children: PropTypes.node.isRequired
};

CardFooterRight.defaultProps = {
  className: '',
  collapse: false
};

export default CardFooterRight;
