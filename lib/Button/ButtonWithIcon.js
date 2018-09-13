import PropTypes from 'prop-types';
import React from 'react';
import { Button, Icon } from '../';

const ButtonWithIcon = props => (
  <div className="button-icon">
    <Button
      className="button-icon__button"
      clickHandler={props.mainClickHandler}
    >
      {props.children}
    </Button>
    <Button className="button-icon__icon" clickHandler={props.iconClickHandler}>
      <Icon name={props.iconName} />
    </Button>
  </div>
);

ButtonWithIcon.propTypes = {
  mainClickHandler: PropTypes.func.isRequired,
  iconClickHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  iconName: PropTypes.string.isRequired
};

export default ButtonWithIcon;
