import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from '../../../stories/styleguide/StoryItem';
import { Toolbar } from '../Toolbar';
import { ButtonIcon } from '../../ButtonNew/ButtonIcon';

storiesOf('Components', module).add('Toolbar', () => (
  <StoryItem title="Toolbar" description="The toolbar component">
    <Toolbar>
      <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
      <Toolbar.Divider />
      <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
      <Toolbar.Divider />
      <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
      <Toolbar.Divider />
      <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
      <Toolbar.Divider />
      <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
    </Toolbar>
  </StoryItem>
));
