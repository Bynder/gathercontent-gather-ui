import React from 'react';
import { storiesOf } from '@storybook/react';
import FontAwesomeIcon from '../../lib/FontAwesomeIcon';
import Icon from '../../lib/Icon';
import StoryItem from '../styleguide/StoryItem';
import Button from '../../lib/Button';

storiesOf('Components', module)
  .add('Icons', () => (
    <div>
      <StoryItem
        title="FontAwesome Icon"
        description="A wrapper around FontAwesome icons."
      >
        <div>
          <FontAwesomeIcon name="fa-cog" style={{ marginRight: '10px' }} />
          <FontAwesomeIcon name="fa-file" style={{ color: 'red' }} />
        </div>
      </StoryItem>

      <StoryItem
        title="SVG Icons"
        description=""
      >
        <div>
          <Icon name="comment" />
          <Icon name="plusCircle" />
          <Icon name="plus" />
          <Icon name="caret" />
        </div>
      </StoryItem>

      <StoryItem
        title="SVG Icons (minor)"
        description=""
      >
        <div>
          <Icon name="comment" size="minor" />
          <Icon name="plusCircle" size="minor" />
          <Icon name="plus" size="minor" />
        </div>
      </StoryItem>

      <StoryItem
        title="SVG Icons (small)"
        description=""
      >
        <div>
          <Icon name="comment" size="small" />
          <Icon name="plusCircle" size="small" />
          <Icon name="plus" size="small" />
          <Icon name="caret" size="small" />
        </div>
      </StoryItem>

      <StoryItem
        title="SVG Icons (micro)"
        description=""
      >
        <div>
          <Icon name="plus" size="micro" />
          <Icon name="caret" size="micro" />
        </div>
      </StoryItem>

      <StoryItem
        title="Interactive SVG Icons"
        description="Certain SVG icons have a unique interactive state when hovered or focused."
      >
        <Button types={['icon-only']}>
          <Icon name="comment" isInteractive />
        </Button>
      </StoryItem>
    </div>
  ));
