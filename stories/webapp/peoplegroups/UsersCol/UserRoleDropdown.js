import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { Dropdown, Icon } from 'lib';

const UserRoleDropdown = ({ user, roles }) => (
  <Dropdown id={`user-role-dropown-${user.id}`}>
    <Dropdown.Trigger>
      {user.role} <Icon name="down" className="h-vertical-align-middle" />
      <Dropdown.Content
        collapse
        className="h-padding-top-half h-padding-bottom-half"
      >
        {roles.map(role => (
          <Dropdown.Action key={role.id} action={() => {}}>
            {role.name}
          </Dropdown.Action>
        ))}
      </Dropdown.Content>
    </Dropdown.Trigger>
  </Dropdown>
);

UserRoleDropdown.propTypes = {
  user: shape().isRequired,
  roles: arrayOf(shape()).isRequired
};

export default UserRoleDropdown;
