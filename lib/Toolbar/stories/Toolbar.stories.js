import React from 'react';
import StoryItem from '../../../stories/styleguide/StoryItem';
import { Toolbar as ToolbarComponent } from '../Toolbar';
import { ButtonIcon } from '../../src/modules/Button/ButtonIcon/ButtonIcon';

export default {
  title: 'Legacy/Toolbar',
  component: ToolbarComponent
};

export const Toolbar = () => (
  <StoryItem title="ToolbarComponent" description="The toolbar component">
    <ToolbarComponent>
      <ButtonIcon name="bold16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="italic16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="strikethrough16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="link16" size={ButtonIcon.sizes.sm} />
      <ToolbarComponent.Divider />
      <ButtonIcon name="unorderedList16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="orderedList16" size={ButtonIcon.sizes.sm} />
      <ToolbarComponent.Divider />
      <ButtonIcon name="indent16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="outdent16" size={ButtonIcon.sizes.sm} />
      <ToolbarComponent.Divider />
      <ButtonIcon name="subscript16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="superscript16" size={ButtonIcon.sizes.sm} />
      <ToolbarComponent.Divider />
      <ButtonIcon name="table16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="comment16" size={ButtonIcon.sizes.sm} />
      <ButtonIcon name="caption16" size={ButtonIcon.sizes.sm} />
    </ToolbarComponent>
  </StoryItem>
);

Toolbar.parameters = {
  controls: { hideNoControlsWarning: true }
};
