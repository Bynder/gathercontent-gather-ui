import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import NavLink from '../../lib/NavLink';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Navigation Link', () => {
    return (
      <div>
        <StoryItem
          title="Navigation Link"
          description="A simple link item that accepts all traditional `href` properties">
          <NavLink url="/" target="_blank" className="link">Go to dashboard</NavLink>
        </StoryItem>
      </div>
    );
  })
