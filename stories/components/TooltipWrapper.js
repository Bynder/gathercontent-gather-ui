import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import StoryItem from '../styleguide/StoryItem';
import TooltipWrapper from '../../lib/TooltipWrapper/index';

storiesOf('Components', module)
  .add('Tooltip', () => {
    const showManual = boolean('Show manual tooltip', false);

    return (
      <div>
        <StoryItem
          title="Tooltip Wrapper"
          description="TooltipWrapper is a custom wrapper for the `Tooltip` bootstrap component."
        >
          <TooltipWrapper id="id-1" tooltipText="Sample tooltip text">
            <span>Hover over me for a tooltip!</span>
          </TooltipWrapper>
        </StoryItem>
      </div>
    )
});
