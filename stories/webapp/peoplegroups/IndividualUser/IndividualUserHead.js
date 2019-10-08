import React from 'react';
import { string, func } from 'prop-types';
import {
  Avatar,
  AvatarInformation,
  FinderPanelLayout,
  Navigation,
  Dropdown
} from 'lib';
import { MenuItem } from 'react-bootstrap/lib';
import { USER_PROJECTS, USER_ACTIVITY } from '../consts';

const IndividualUserHead = ({ activeUser, setActiveState, activeState }) => (
  <FinderPanelLayout.Header>
    <Avatar url={activeUser.url} name={activeUser.name} extraLargeSize>
      <AvatarInformation
        className="h-overflow-visible"
        name={activeUser.name}
        email={activeUser.email}
        actions={
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
  setActiveState: func.isRequired,
  activeState: string.isRequired
};

export default IndividualUserHead;
