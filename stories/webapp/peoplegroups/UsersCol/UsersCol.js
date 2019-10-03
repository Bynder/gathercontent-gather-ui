import React from 'react';
import {
  CollectionsTable,
  Button,
  Avatar,
  AvatarInformation,
  Dropdown,
  Icon
} from 'lib';

const UsersCol = ({ users, roles }) => (
  <CollectionsTable>
    <CollectionsTable.Row>
      <CollectionsTable.Heading>Name</CollectionsTable.Heading>
      <CollectionsTable.Heading className="hide-small">
        Role
      </CollectionsTable.Heading>
      <CollectionsTable.Heading className="hide-small">
        Authentication
      </CollectionsTable.Heading>
      <CollectionsTable.Heading className="hide-small" />
    </CollectionsTable.Row>
    {users.map(user => (
      <CollectionsTable.Row key={user.id}>
        <CollectionsTable.Cell>
          <Avatar name={user.name} url={user.url}>
            <AvatarInformation name={user.name} email={user.email} />
          </Avatar>
        </CollectionsTable.Cell>
        <CollectionsTable.Cell allowOverflow>
          <Dropdown id={`user-role-dropown-${user.id}`}>
            <Dropdown.Trigger>
              {user.role} <Icon name="caret" />
              <Dropdown.Content collapse>
                {roles.map(role => (
                  <Dropdown.Action action={() => {}}>
                    {role.name}
                  </Dropdown.Action>
                ))}
              </Dropdown.Content>
            </Dropdown.Trigger>
          </Dropdown>
        </CollectionsTable.Cell>
        <CollectionsTable.Cell>{user.authentication}</CollectionsTable.Cell>
        <CollectionsTable.Cell>
          <Button types={['link-default', 'collapse']} clickHandler={() => {}}>
            Manage
          </Button>
        </CollectionsTable.Cell>
      </CollectionsTable.Row>
    ))}
  </CollectionsTable>
);

export default UsersCol;
