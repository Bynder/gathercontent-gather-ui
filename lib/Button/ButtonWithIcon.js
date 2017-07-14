import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../';
import commentSVG from './../../assets/icons/comment.svg';
import plusSVG from './../../assets/icons/plus.svg';

const matchType = (type) => {
  const types = {
    comment: commentSVG,
    plus: plusSVG,
  }

  return types[type];
};

const ButtonWithIcon = (props) => {
  const type = props.type;
  const icon = type === 'default' ? props.children : matchType(type)();

  return (
    <Button types={['floating']} className="button--no-border" {...props}>
      { icon }
    </Button>
  );
};

ButtonWithIcon.defaultProps = {
  type: 'default',
  children: null,
};

ButtonWithIcon.propTypes = {
  type: PropTypes.string,
  children: PropTypes.shape([]),
};

export default ButtonWithIcon;
