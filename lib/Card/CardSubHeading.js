import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CardSubHeading = props => {
  const classNames = cx(`card__subheading ${props.className}`, {
    'card__subheading--truncate': props.truncate
  });
  return <div className={classNames}>{props.children}</div>;
};

CardSubHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  truncate: PropTypes.bool
};

CardSubHeading.defaultProps = {
  className: '',
  truncate: false
};

export default CardSubHeading;
