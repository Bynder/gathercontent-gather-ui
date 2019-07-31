import React from 'react';
import { number } from '@storybook/addon-knobs';
import faker from 'faker';
import uuid from 'uuid/v1';
import AvatarGroup from '../AvatarGroup';
import { AvatarWithPopover, ParticipantInfo } from '../../index';

const createAvatarGroup = (defaultValue = 3) => {
  const count = Math.floor(
    Math.random() * number('Max number of assignees', defaultValue) || 0
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

export { createAvatarGroup };
