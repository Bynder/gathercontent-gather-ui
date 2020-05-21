/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonLink } from '../../ButtonLink/ButtonLink';
import StoryItem from '../../../../stories/styleguide/StoryItem';

storiesOf('Components', module).add('ButtonLink', () => (
  <StoryItem title="ButtonLink" description="The link button component">
    <ButtonLink onClick={() => console.log('Yo. Why did you click me?')}>
      Looks like a link, acts like a button!
    </ButtonLink>
  </StoryItem>
));
