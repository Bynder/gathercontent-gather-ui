import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import { storiesOf } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import TopBar from '../../lib/TopBar';
import Button from '../../lib/Button';
import Icon from '../../lib/Icon';
import Avatar from '../../lib/Avatar';
import AvatarGroup from '../../lib/AvatarGroup';

storiesOf('Components', module).add('TopBar', () => (
  <div>
    <StoryItem
      title="TopBar Wrapper"
      description="TopBar is the top bar used throughout the whole site."
    >
      <TopBar>
        <Col className="top-bar__content top-bar__content--left" xs={10} md={5}>
          <div className="top-bar__cell">
            <Icon name="backArrow" className="top-bar__action top-bar__action--collapse-left" />
          </div>
          <div className="top-bar__cell top-bar__cell--bordered">
            <Button
              types={['icon-only']}
              clickHandler={() => {}}
              className="top-bar__action"
            >
              <Icon name="menu" size="minor" />
            </Button>
          </div>
        </Col>
        <Col className="top-bar__content top-bar__content--right" xs={2} md={4}>
          <div className="top-bar__cell">
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
          </div>
          <div className="top-bar__cell top-bar__cell--bordered">
            <Button
              types={['icon-only']}
              className="top-bar__action"
              clickHandler={() => {}}
            >
              <Icon name="menuDotted" />
            </Button>
          </div>
        </Col>
        <Col
          className="top-bar__content top-bar__content--center"
          xs={12}
          md={3}
        >
          Centered content
        </Col>
      </TopBar>
    </StoryItem>
  </div>
));
