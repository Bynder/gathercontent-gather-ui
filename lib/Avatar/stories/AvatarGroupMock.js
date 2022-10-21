import React from 'react';
import { number } from '@storybook/addon-knobs';
import faker from 'faker';
import uuid from 'uuid/v1';
import AvatarGroup from '../AvatarGroup';
import { AvatarWithPopover, ParticipantInfo } from '../../index';

const AvatarGroupMock = ({
  children,
  defaultMaxCount,
  minCount,
  avatarProps,
  avatarGroupProps,
  overlayProps
}) => {
  const count = Math.floor(
    Math.random() * number('Max number of assignees', defaultMaxCount || 0)
  );

  const avatarCount =
    minCount > count || minCount > defaultMaxCount ? minCount : count;

  const ui = (
    <AvatarGroup {...avatarGroupProps}>
      {[...Array(avatarCount).keys()].map(() => {
        const name = faker.name.findName();
        const initials = name.substring(0, 2);
        const email = faker.internet.email();
        const avatar = faker.image.avatar();
        const color = faker.commerce.color();

        return (
          <AvatarWithPopover
            name={name}
            initials={initials}
            email={email}
            url={avatar}
            colour={color}
            className={color ? 'avatar--has-colour' : ''}
            {...avatarProps}
            {...overlayProps}
            key={uuid()}
          >
            <ParticipantInfo name={name} email={email} />
          </AvatarWithPopover>
        );
      })}
    </AvatarGroup>
  );

  return children({
    ui,
    count
  });
};

AvatarGroupMock.defaultProps = {
  defaultMaxCount: 3,
  minCount: 0,
  avatarGroupProps: {
    maximum: 3,
    stacked: true
  },
  avatarProps: {},
  overlayProps: {}
};

export { AvatarGroupMock };
