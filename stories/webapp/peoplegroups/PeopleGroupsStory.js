import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import {
  CollectionsTable,
  Button,
  Avatar,
  AvatarInformation,
  FinderNavigation,
  FinderPanelLayout
} from 'lib';
import createData from './data';
import GroupsCol from './GroupsCol/GroupsCol';
import UsersCol from './UsersCol/UsersCol';

const stories = storiesOf('Web app', module);

const userCount = number('Total number of users', 20);
const groupCount = number('Total number of groups', 8);
const roleCount = number('Total number of roles', 6);

stories.add('PeopleAndGroups', () => {
  const data = createData({ userCount, groupCount, roleCount });
  return (
    <FinderPanelLayout>
      <FinderPanelLayout.Left>
        <GroupsCol groups={data.groups} />
      </FinderPanelLayout.Left>
      <FinderPanelLayout.Right>
        <UsersCol users={data.users} roles={data.roles} />
      </FinderPanelLayout.Right>
    </FinderPanelLayout>
  );
});
