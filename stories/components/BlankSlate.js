import React from 'react';
import { storiesOf } from '@storybook/react';
import { BlankSlate, Button } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Blank Slate', () => (
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
      <BlankSlate
        style="arrow"
      >
        <h2 className="blank-slate__heading">Hey do something on the left</h2>
        <p>Then put it over here.</p>
      </BlankSlate>
    </StoryItem>
  </div>
));
