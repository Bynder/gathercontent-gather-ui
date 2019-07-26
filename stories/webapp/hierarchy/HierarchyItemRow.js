import React from 'react';
import faker from 'faker';
import { text, number } from '@storybook/addon-knobs';
import {
  AvatarWithPopover,
  ItemRow,
  ParticipantInfo,
  StatusIndicator
} from '../../../lib';
import AvatarGroup from '../../../lib/Avatar/AvatarGroup';

const createAvatarWithPopover = () => {
  const name = faker.name.findName();
  const initials = `${[...name][0]}${[...name][1]}`;
  const email = faker.internet.email();
  const avatar = faker.image.avatar();

  return (
    <AvatarWithPopover
      name={name}
      initials={initials}
      email={email}
      url={avatar}
      smallSize
      bordered
    >
      <ParticipantInfo name={name} email={email} />
    </AvatarWithPopover>
  );
};

const createAvatarGroup = () => {
  const count = Math.floor(
    Math.random() * number('Max number of assignees', 5) || 0
  );

  return (
    <AvatarGroup maximum={10}>
      {[...Array(count).keys()].map(() => createAvatarWithPopover())}
    </AvatarGroup>
  );
};

const createStatusIndicator = () => (
  <StatusIndicator color={text('Status colour', 'green')} />
);

export const HierarchyItemRow = () => (
  <ItemRow
    className="h-margin-bottom-half"
    indicator={createStatusIndicator()}
    participants={createAvatarGroup()}
    bordered
  >
    {faker.commerce.productName()}
  </ItemRow>
);
