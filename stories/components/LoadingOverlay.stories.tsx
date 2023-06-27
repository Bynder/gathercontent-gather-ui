import React from 'react';
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Loadi... Remove this comment to see the full error message
import { LoadingOverlay as LoadingOverlayComponent } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Legacy/Loading Overlay',
  component: LoadingOverlayComponent,
  args: {
    percentageLoaded: 50,
    fixed: true
  }
};

export const LoadingOverlay = (args: any) => <StoryItem title="Loading Overlay Component" description="">
  <LoadingOverlayComponent {...args} />
</StoryItem>;
