import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CardFooter = props => {
  const classNames = cx(`card__footer ${props.className}`, {
    'card__footer--collapse': props.collapse
  });
  return <div className={classNames}>{props.children}</div>;
};

CardFooter.propTypes = {
  className: PropTypes.string,
  collapse: PropTypes.bool,
  children: PropTypes.node.isRequired
};

CardFooter.defaultProps = {
  className: '',
  collapse: false
};

export default CardFooter;
