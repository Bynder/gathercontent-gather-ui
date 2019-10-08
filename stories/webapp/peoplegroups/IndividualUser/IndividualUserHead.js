import React from 'react';
import { string, arrayOf, shape, func } from 'prop-types';
import {
  Avatar,
  AvatarInformation,
  FinderPanelLayout,
  Navigation,
  Dropdown,
  Icon
} from 'lib';
import { MenuItem } from 'react-bootstrap/lib';
import { USER_PROJECTS, USER_ACTIVITY } from '../consts';
import UserRoleDropdown from '../UsersCol/UserRoleDropdown';

const IndividualUserHead = ({
  activeUser,
  roles,
  setActiveState,
  activeState
}) => (
  <FinderPanelLayout.Header>
    <Avatar url={activeUser.url} name={activeUser.name} extraLargeSize>
      <AvatarInformation
        className="h-overflow-visible"
        name={
          <div className="h-display-flex">
            <p className="weight-bold h-margin-top-clear h-margin-bottom-clear h-margin-right-half">
              {activeUser.name}
            </p>
            <UserRoleDropdown roles={roles} user={activeUser} />
          </div>
        }
        email={activeUser.email}
        actions={
          <>
            <Icon name="lock" dark /> {activeUser.authentication}
            {` • `}
            <Dropdown id={`manage-user-${activeUser.id}`}>
              <Dropdown.Trigger useButton types={['link-default', 'collapse']}>
                Manage user
              </Dropdown.Trigger>
              <Dropdown.Content collapse>
                <Dropdown.ActionGroup>
                  <Dropdown.Action action={() => {}}>
                    Send password reset email
                  </Dropdown.Action>
                </Dropdown.ActionGroup>
                <Dropdown.ActionGroup>
                  <Dropdown.Action action={() => {}} danger>
                    Delete user
                  </Dropdown.Action>
                </Dropdown.ActionGroup>
              </Dropdown.Content>
            </Dropdown>
          </>
        }
      />
    </Avatar>
    <Navigation tabs className="h-margin-top-half h-margin-bottom-half">
      <MenuItem
        href="#"
        active={activeState === USER_PROJECTS}
        onSelect={() => setActiveState(USER_PROJECTS)}
      >
        Projects
      </MenuItem>
      <MenuItem
        href="#"
        active={activeState === USER_ACTIVITY}
        onSelect={() => setActiveState(USER_ACTIVITY)}
      >
        Recent activity
      </MenuItem>
    </Navigation>
  </FinderPanelLayout.Header>
);

IndividualUserHead.propTypes = {
  activeUser: string.isRequired,
  roles: arrayOf(shape()).isRequired,
  setActiveState: func.isRequired,
  activeState: string.isRequired
};

export default IndividualUserHead;
