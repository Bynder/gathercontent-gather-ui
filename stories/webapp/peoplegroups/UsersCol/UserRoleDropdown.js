import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { Dropdown, Icon } from 'lib';

const UserRoleDropdown = ({ user, roles }) => (
  <Dropdown id={`user-role-dropown-${user.id}`}>
    <Dropdown.Trigger blueOnActive triggerClassName="typo-size-slight">
      {user.role} <Icon name="down" className="h-vertical-align-middle" />
    </Dropdown.Trigger>
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
  </Dropdown>
);

UserRoleDropdown.propTypes = {
  user: shape().isRequired,
  roles: arrayOf(shape()).isRequired
};

export default UserRoleDropdown;
