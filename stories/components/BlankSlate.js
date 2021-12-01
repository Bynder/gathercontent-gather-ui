import React from 'react';
import { BlankSlate, Button } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _BlankSlate = () => (
  <div>
    <StoryItem
      title="BlankSlate Component"
      description="BlankSlate with the default style"
    >
      <BlankSlate>
        <h2 className="blank-slate__heading">This is a blank slate</h2>
        <p>Use me to show that something is empty.</p>
        <Button
          types={['secondary']}
          clickHandler={() => console.log('do a thing')}
        >
          Do something
        </Button>
      </BlankSlate>
    </StoryItem>
    <StoryItem
      title="BlankSlate Component"
      description="BlankSlate with the arrow style"
    >
      <BlankSlate slateStyle="arrow">
        <h2 className="blank-slate__heading">Hey do something on the left</h2>
        <p>Then put it over here.</p>
      </BlankSlate>
    </StoryItem>
    <StoryItem
      title="BlankSlate Component"
      description="BlankSlate with an emoji"
    >
      <BlankSlate emoji="🔎" emojiLabel="Magnifying glass">
        <h2 className="blank-slate__heading">Look an emoji!</h2>
        <p>How wonderful.</p>
      </BlankSlate>
    </StoryItem>
  </div>
);
