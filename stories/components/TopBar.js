import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import { storiesOf } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import TopBar from '../../lib/TopBar';
import Button from '../../lib/Button';

storiesOf('Components', module).add('TopBar', () => (
  <div>
    <StoryItem
      title="TopBar Wrapper"
      description="TopBar is the top bar used throughout the whole site."
    >
      <TopBar>
        <Col className="top-bar__content top-bar__content--left" xs={10} md={5}>
          <div className="top-bar__cell">
            <Button types={['primary']} clickHandler={() => {}}>
              Primary button
            </Button>
          </div>
        </Col>
      </TopBar>
    </StoryItem>
  </div>
));
