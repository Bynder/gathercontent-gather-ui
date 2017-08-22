import React from 'react';
import { storiesOf } from '@storybook/react';
import FontAwesomeIcon from '../../lib/FontAwesomeIcon';
import Icon from '../../lib/Icon';
import StoryItem from '../styleguide/StoryItem';

const allIcons = additionalProps => (
  <div>
    <Icon name="comment" {...additionalProps} />
    <Icon name="plusCircle" {...additionalProps} />
    <Icon name="plus" {...additionalProps} />
    <Icon name="caret" {...additionalProps} />
    <Icon name="menu" {...additionalProps} />
    <Icon name="loader" {...additionalProps} />
  </div>
);

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
        {allIcons()}
      </StoryItem>

      <StoryItem
        title="SVG Icons (minor)"
        description=""
      >
        {allIcons({ size: 'minor' })}
      </StoryItem>

      <StoryItem
        title="SVG Icons (small)"
        description=""
      >
        {allIcons({ size: 'small' })}
      </StoryItem>

      <StoryItem
        title="SVG Icons (micro)"
        description=""
      >
        {allIcons({ size: 'micro' })}
      </StoryItem>

      <StoryItem
        title="Interactive SVG Icons"
        description="Icons can be interactive hovered or focused."
      >
        {allIcons({ isInteractive: true })}
      </StoryItem>

      <StoryItem
        title="Active SVG Icons"
        description="Active icons become a specific colour."
      >
        <div className="is-active">
          {allIcons()}
        </div>
      </StoryItem>
    </div>
  ));
