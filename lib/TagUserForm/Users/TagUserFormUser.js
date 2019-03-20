import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, TooltipWrapper } from '../..';

const TagUserFormUser = props => {
  if (props.isLocked) {
    return (
      <TooltipWrapper
        id={props.user.display}
        tooltipText={props.lockedUserTooltip}
        placement="top"
      >
        <div className="taguser-form__user is-locked">
          {props.user.name} <Icon name="lock" />
        </div>
      </TooltipWrapper>
    );
  }
  return (
    <div className="taguser-form__user">
      {props.user.name}
      <Button
        clickHandler={() => props.removeUser(props.user)}
        types={['icon-only', 'collapse']}
      >
        <Icon name="cross" />
      </Button>
    </div>
  );
};

TagUserFormUser.propTypes = {
  user: PropTypes.shape().isRequired,
  removeUser: PropTypes.func,
  isLocked: PropTypes.bool,
  lockedUserTooltip: PropTypes.string
};

TagUserFormUser.defaultProps = {
  isLocked: false,
  lockedUserTooltip: '',
  removeUser: () => {}
};

export default TagUserFormUser;
