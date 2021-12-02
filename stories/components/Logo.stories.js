import React from 'react';
import LogoComponent from '../../lib/Logo';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Legacy/Logo',
  component: LogoComponent
};

export const Logo = () => (
  <div>
    <StoryItem title="Default Logo" description="A wrapper around the logo">
      <div>
        <LogoComponent />
      </div>
    </StoryItem>

    <StoryItem title="Custom Logo" description="">
      <LogoComponent
        url="https://dummyimage.com/150x40/3d8beb/fff.png"
        alt="Alt Tag"
      />
    </StoryItem>
  </div>
);

Logo.parameters = {
  controls: { hideNoControlsWarning: true }
};
