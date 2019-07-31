import React from 'react';
import faker from 'faker';
import uuid from 'uuid/v1';
import { number } from '@storybook/addon-knobs';
import {
  AvatarWithPopover,
  ItemRow,
  ParticipantInfo,
  StatusIndicator
} from '../../../lib';
import AvatarGroup from '../../../lib/Avatar/AvatarGroup';

const createAvatarGroup = () => {
  const count = Math.floor(
    Math.random() * number('Max number of assignees', 5) || 0
  );

  return (
    <AvatarGroup maximum={3}>
      {[...Array(count).keys()].map(() => {
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
            key={uuid()}
          >
            <ParticipantInfo name={name} email={email} />
          </AvatarWithPopover>
        );
      })}
    </AvatarGroup>
  );
};

const createStatusIndicator = statusColor => (
  <StatusIndicator color={statusColor} />
);

export const HierarchyItemRow = ({ statusColor }) => (
  <ItemRow
    className="h-margin-bottom-half"
    indicator={createStatusIndicator(statusColor)}
    participants={createAvatarGroup()}
    bordered
  >
    <a href="/">{faker.commerce.productName()}</a>
  </ItemRow>
);

HierarchyItemRow.propTypes = {
  statusColor: StatusIndicator.propTypes.color.isRequired
};
