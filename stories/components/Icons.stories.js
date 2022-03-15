import React from 'react';
import Icon from '../../lib/Icon';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Legacy/Icons',
  component: Icon
};

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
    <Icon name="tickCircle" {...additionalProps} />
    <Icon name="emptyCircle" {...additionalProps} />
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
    <Icon name="componentField" {...additionalProps} />
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
    <Icon name="addItem" {...additionalProps} />
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
    <Icon name="eye" {...additionalProps} />
    <Icon name="newWindow" {...additionalProps} />
    <Icon name="commentFill" {...additionalProps} />
    <Icon name="copyFill" {...additionalProps} />
    <Icon name="at" {...additionalProps} />
    <Icon name="quoteStart" {...additionalProps} />
    <Icon name="embed" {...additionalProps} />
    <Icon name="people" {...additionalProps} />
    <Icon name="item" {...additionalProps} />
    <Icon name="hierarchy" {...additionalProps} />
    <Icon name="question" {...additionalProps} />
    <Icon name="book" {...additionalProps} />
    <Icon name="userEdit" {...additionalProps} />
    <Icon name="key" {...additionalProps} />
    <Icon name="warningTriangle" {...additionalProps} />
    <Icon name="warningOctogon" {...additionalProps} />
    <Icon name="infoSquare" {...additionalProps} />
    <Icon name="integration" {...additionalProps} />
    <Icon name="newWindow16" {...additionalProps} />
    <Icon name="pen16" {...additionalProps} />
    <Icon name="clipboard16" {...additionalProps} />
    <Icon name="item16" {...additionalProps} />
    <Icon name="newComment" {...additionalProps} />
    <Icon name="repeatable" {...additionalProps} />
    <Icon name="plaintext" {...additionalProps} />
    <Icon name="textlimit" {...additionalProps} />
    <Icon name="otheroption" {...additionalProps} />
    <Icon name="template16" {...additionalProps} />
    <Icon name="component16" {...additionalProps} />
    <Icon name="bolt" {...additionalProps} />
    <Icon name="unusedTemplate16" {...additionalProps} />
    <Icon name="addProject16" {...additionalProps} />
    <Icon name="userGroup16" {...additionalProps} />
    <Icon name="todo16" {...additionalProps} />
    <Icon name="settings16" {...additionalProps} />
    <Icon name="goto" {...additionalProps} />
    <Icon name="bynder" {...additionalProps} />
  </div>
);

export const Icons = () => (
  <StoryItem title="SVG Icons" description="">
    {allIcons()}
  </StoryItem>
);

Icons.parameters = {
  controls: { hideNoControlsWarning: true }
};
