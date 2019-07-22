import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import Button from '.';
import Icon from '../Icon';

const ButtonWithIcon = props => {
  const classes = cx(`button__wrapper ${props.className}`, {
    'button__wrapper--size-sm': props.sizeSm
  });
  return (
    <div className={classes}>
      <Button
        types={['primary']}
        className="button__wrapper--button"
        clickHandler={props.mainClickHandler}
        disabled={props.disableBoth || props.disableMain}
      >
        {props.children}
      </Button>
      <Button
        className="button__wrapper--icon"
        clickHandler={props.iconClickHandler}
        disabled={props.disableBoth || props.disableIcon}
      >
        <Icon name={props.iconName} />
      </Button>
    </div>
  );
};

ButtonWithIcon.propTypes = {
  mainClickHandler: PropTypes.func.isRequired,
  iconClickHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  iconName: PropTypes.string.isRequired,
  sizeSm: PropTypes.bool,
  disableBoth: PropTypes.bool,
  disableMain: PropTypes.bool,
  disableIcon: PropTypes.bool,
  className: PropTypes.string
};

ButtonWithIcon.defaultProps = {
  sizeSm: false,
  disableBoth: false,
  disableMain: false,
  disableIcon: false,
  className: ''
};

export default ButtonWithIcon;
