import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import TopBar from '../../lib/TopBar';
import TopBarContent from '../../lib/TopBar/TopBarContent';
import TopBarCell from '../../lib/TopBar/TopBarCell';
import Button from '../../lib/Button';
import Icon from '../../lib/Icon';
import Avatar from '../../lib/Avatar';
import AvatarGroup from '../../lib/AvatarGroup';

storiesOf('Components', module).add('TopBar', () => (
  <div>
    <StoryItem
      title="TopBar Wrapper"
      description="TopBar is the top bar used throughout the whole site, can add a fixed attribute to fix it to the top."
    >
      <TopBar>
        <TopBarContent left xs={10} md={5}>
          <TopBarCell>
            <Icon
              name="backArrow"
              className="top-bar__action top-bar__action--collapse-left"
            />
          </TopBarCell>
          <TopBarCell bordered>
            <Button
              types={['icon-only']}
              clickHandler={() => {}}
              className="top-bar__action"
            >
              <Icon name="menu" size="minor" />
            </Button>
          </TopBarCell>
        </TopBarContent>
        <TopBarContent right xs={2} md={4}>
          <TopBarCell>
            <AvatarGroup maximum={2}>
              <Avatar
                initials="RS"
                name="Richard Swagshaw"
                colour="rgb(252, 92, 84)"
              />
              <Avatar
                initials="JD"
                name="James Darracott"
                colour="rgb(61, 138, 235)"
              />
            </AvatarGroup>
          </TopBarCell>
          <TopBarCell bordered>
            <Button
              types={['icon-only']}
              className="top-bar__action"
              clickHandler={() => {}}
            >
              <Icon name="menuDotted" />
            </Button>
          </TopBarCell>
        </TopBarContent>
        <TopBarContent center xs={12} md={3}>
          Centered content
        </TopBarContent>
      </TopBar>
    </StoryItem>
  </div>
));
