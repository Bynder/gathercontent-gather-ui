import React from 'react';
import { number, func, string } from 'prop-types';
import {
  FinderPanelLayout,
  SearchInput,
  Navigation,
  Icon,
  Button,
  MenuItem
} from 'lib';
import { ALL_USERS, PENDING_USERS, GUEST_USERS } from '../consts';

const UsersHeader = ({
  userCount,
  guestCount,
  pendingCount,
  setActiveState,
  activeState
}) => (
  <FinderPanelLayout.Header>
    <div className="h-display-flex">
      <h2 className="h-margin-clear">All users</h2>
      <div className="h-margin-left-auto">
        <Button onClick={() => {}}>
          <Icon name="userInvite" className="h-padding-right-quarter" /> Invite
          users
        </Button>
        <p className="h-margin-top-half h-margin-bottom-clear neutral-base-text typo-size-slight text-align-right">
          ({userCount}/{userCount + 5} seats used)
        </p>
      </div>
    </div>
    <SearchInput
      onChangeHandler={() => {}}
      onClearHandler={() => {}}
      id="user-search-input"
      label="Filter users"
    />
    <Navigation tabs className="h-margin-top-half h-margin-bottom-half">
      <MenuItem
        href="#"
        active={activeState === ALL_USERS}
        onSelect={() => setActiveState(ALL_USERS)}
      >
        All users ({userCount})
      </MenuItem>
      <MenuItem
        href="#"
        active={activeState === PENDING_USERS}
        onSelect={() => setActiveState(PENDING_USERS)}
      >
        Pending invite ({pendingCount})
      </MenuItem>
      <MenuItem
        href="#"
        active={activeState === GUEST_USERS}
        onSelect={() => setActiveState(GUEST_USERS)}
      >
        Guest users ({guestCount})
      </MenuItem>
    </Navigation>
  </FinderPanelLayout.Header>
);

UsersHeader.propTypes = {
  userCount: number.isRequired,
  pendingCount: number.isRequired,
  guestCount: number.isRequired,
  setActiveState: func.isRequired,
  activeState: string.isRequired
};

export default UsersHeader;
