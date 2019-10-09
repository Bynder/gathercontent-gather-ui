import React from 'react';
import { arrayOf, shape, func, string } from 'prop-types';
import {
  CollectionsTable,
  Avatar,
  AvatarInformation,
  Dropdown,
  Icon,
  Button
} from 'lib';
import { ALL_USERS, GUEST_USERS, USER_PROJECTS } from '../consts';
import UserRoleDropdown from './UserRoleDropdown';

const cellClasses = 'h-padding-top-half h-padding-bottom-half';

const UsersTable = ({
  users,
  roles,
  activeState,
  setActiveState,
  setActiveUser
}) => (
  <CollectionsTable>
    <CollectionsTable.Row>
      <CollectionsTable.Heading>Name</CollectionsTable.Heading>
      {activeState !== GUEST_USERS && (
        <CollectionsTable.Heading className="hide-small">
          Role
        </CollectionsTable.Heading>
      )}
      {activeState === ALL_USERS && (
        <CollectionsTable.Heading className="hide-small">
          Authentication
        </CollectionsTable.Heading>
      )}
      <CollectionsTable.Heading className="hide-small">
        {' '}
      </CollectionsTable.Heading>
    </CollectionsTable.Row>
    {users.map(user => (
      <CollectionsTable.Row key={user.id}>
        <CollectionsTable.Cell className={cellClasses}>
          <Avatar name={user.name} url={user.url} largeSize>
            <AvatarInformation
              name={
                <Button
                  types={['link-no-underline', 'collapse']}
                  clickHandler={() => {
                    setActiveUser(user.id);
                    setActiveState(USER_PROJECTS);
                  }}
                >
                  {user.name}
                </Button>
              }
              email={user.email}
            />
          </Avatar>
        </CollectionsTable.Cell>
        {activeState !== GUEST_USERS && (
          <CollectionsTable.Cell allowOverflow className={cellClasses}>
            <UserRoleDropdown roles={roles} user={user} />
          </CollectionsTable.Cell>
        )}
        {activeState === ALL_USERS && (
          <CollectionsTable.Cell className={`${cellClasses} typo-size-slight`}>
            {user.authentication}
          </CollectionsTable.Cell>
        )}
        <CollectionsTable.Cell allowOverflow alignRight className={cellClasses}>
          <Dropdown id={`user-manage-dropdown-${user.id}`}>
            <Dropdown.Trigger
              types={['icon-only']}
              triggerClassName="h-padding-left-half h-padding-right-half h-padding-top-quarter"
            >
              <Icon name="menuDotted" />
            </Dropdown.Trigger>
            <Dropdown.Content collapse right>
              <Dropdown.ActionGroup>
                <Dropdown.Action
                  action={() => {
                    setActiveUser(user.id);
                    setActiveState(USER_PROJECTS);
                  }}
                >
                  Manage
                </Dropdown.Action>
                <Dropdown.Action action={() => {}}>
                  Send password reset email
                </Dropdown.Action>
              </Dropdown.ActionGroup>
              <Dropdown.ActionGroup>
                <Dropdown.Action action={() => {}} danger>
                  Delete team member
                </Dropdown.Action>
              </Dropdown.ActionGroup>
            </Dropdown.Content>
          </Dropdown>
        </CollectionsTable.Cell>
      </CollectionsTable.Row>
    ))}
  </CollectionsTable>
);

UsersTable.propTypes = {
  users: arrayOf(shape()).isRequired,
  roles: arrayOf(shape()).isRequired,
  activeState: string.isRequired,
  setActiveState: func.isRequired,
  setActiveUser: func.isRequired
};

export default UsersTable;
