import React from 'react';
import { number } from '@storybook/addon-knobs';
import { LoadingOverlay } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _LoadingOverlay = () => {
  const percentageLoaded = number('Loaded percentage', 50);

  return (
    <StoryItem title="Loading Overlay Component" description="">
      <LoadingOverlay percentageLoaded={percentageLoaded} fixed />
    </StoryItem>
  );
};
