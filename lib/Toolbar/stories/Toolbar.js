import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from '../../../stories/styleguide/StoryItem';
import { Toolbar } from '../Toolbar';
import { ButtonIcon } from '../../src/modules/Button/ButtonIcon/ButtonIcon';

storiesOf('Components', module).add('Toolbar', () => (
  <StoryItem title="Toolbar" description="The toolbar component">
    <Toolbar>
      <ButtonIcon name="bold16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="italic16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="strikethrough16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="link16" size={ButtonIcon.sizes.sm} />
      <Toolbar.Divider />
      <ButtonIcon name="unorderedList16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="orderedList16" size={ButtonIcon.sizes.sm} />
      <Toolbar.Divider />
      <ButtonIcon name="indent16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="outdent16" size={ButtonIcon.sizes.sm} />
      <Toolbar.Divider />
      <ButtonIcon name="subscript16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="superscript16" size={ButtonIcon.sizes.sm} />
      <Toolbar.Divider />
      <ButtonIcon name="table16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="comment16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
    </Toolbar>
  </StoryItem>
));
