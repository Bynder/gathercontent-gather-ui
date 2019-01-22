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
    <Icon name="caretUp" {...additionalProps} />
    <Icon name="cog" {...additionalProps} />
    <Icon name="menu" {...additionalProps} />
    <Icon name="menuDotted" {...additionalProps} />
    <Icon name="loader" {...additionalProps} />
    <Icon name="tick" {...additionalProps} />
    <Icon name="backArrow" {...additionalProps} />
    <Icon name="pencil" {...additionalProps} />
    <Icon name="upload" {...additionalProps} />
    <Icon name="trash" {...additionalProps} />
    <Icon name="fullScreen" {...additionalProps} />
    <Icon name="download" {...additionalProps} />
    <Icon name="person" {...additionalProps} />
    <Icon name="keyboard" {...additionalProps} />
    <Icon name="attachment" {...additionalProps} />
    <Icon name="checkbox" {...additionalProps} />
    <Icon name="guideline" {...additionalProps} />
    <Icon name="radio" {...additionalProps} />
    <Icon name="text" {...additionalProps} />
    <Icon name="up" {...additionalProps} />
    <Icon name="down" {...additionalProps} />
    <Icon name="cross" {...additionalProps} />
    <Icon name="clock" {...additionalProps} />
    <Icon name="warning" {...additionalProps} />
    <Icon name="dragHandle" {...additionalProps} />
    <Icon name="bulletList" {...additionalProps} />
    <Icon name="numberedList" {...additionalProps} />
    <Icon name="table" {...additionalProps} />
    <Icon name="quote" {...additionalProps} />
    <Icon name="help" {...additionalProps} />
    <Icon name="lock" {...additionalProps} />
    <Icon name="info" {...additionalProps} />
    <Icon name="search" {...additionalProps} />
    <Icon name="save" {...additionalProps} />
    <Icon name="archive" {...additionalProps} />
    <Icon name="calendar" {...additionalProps} />
    <Icon name="contentMap" {...additionalProps} />
    <Icon name="export" {...additionalProps} />
    <Icon name="files" {...additionalProps} />
    <Icon name="grid" {...additionalProps} />
    <Icon name="list" {...additionalProps} />
    <Icon name="items" {...additionalProps} />
    <Icon name="template" {...additionalProps} />
    <Icon name="home" {...additionalProps} />
    <Icon name="chevronRight" {...additionalProps} />
    <Icon name="folder" {...additionalProps} />
    <Icon name="change" {...additionalProps} />
    <Icon name="export2" {...additionalProps} />
    <Icon name="folderGo" {...additionalProps} />
    <Icon name="folderOpen" {...additionalProps} />
    <Icon name="image" {...additionalProps} />
    <Icon name="status" {...additionalProps} />
    <Icon name="user" {...additionalProps} />
  </div>
);

storiesOf('Components', module)
  .add('Icons', () => (
    <div>
      <StoryItem
        title="FontAwesome Icons"
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
    </div>
  ));
