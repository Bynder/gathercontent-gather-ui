import React from 'react';
import { storiesOf } from '@storybook/react';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from '../../lib/Tooltip/';
import StoryItem from '../styleguide/StoryItem';

const triggerStyle = {
  background: 'rebeccapurple',
  color: '#fff',
  padding: '.3rem .5rem',
  borderRadius: '6px',
  display: 'inline-block',
};

const tooltipTwo = () => (
  <Tooltip title="Default style" id="id-2">
    <p>Do you like tooltips?</p>
  </Tooltip>
);

const tooltipOne = () => (
  <Tooltip className="avatar__tooltip" id="id-1">
    <p className="avatar__tooltip-name">Hello</p>
    <p className="avatar__tooltip-email">Do you like tooltips?</p>
  </Tooltip>
);

storiesOf('Components', module)
  .add('Tooltip', () => {
    return (
      <div>
        <StoryItem
          title="Tooltip — custom styling (on hover)"
          description="Tooltips are just a custom wrapper for the `Popover` component. They're controlled by using the `OverlayTrigger`, where their contents, trigger and placement are defined.">
             <OverlayTrigger trigger={['hover']} placement="bottom" overlay={tooltipOne()}>
                <span style={triggerStyle}>
                    <h3>Hover over me to trigger a tooltip</h3>
                </span>
            </OverlayTrigger>
        </StoryItem>

        <StoryItem
          title="Tooltip — default styling (on hover)"
          description="Tooltips are just a custom wrapper for the `Popover` component. They're controlled by using the `OverlayTrigger`, where their contents, trigger and placement are defined. By default, the Popover component accepts a title attribute.">
             <OverlayTrigger trigger={['hover']} placement="bottom" overlay={tooltipTwo()}>
                <span style={triggerStyle}>
                    <h3>Hover over me to trigger a tooltip</h3>
                </span>
            </OverlayTrigger>
        </StoryItem>

        <StoryItem
          title="Tooltip — custom placement (on click)"
          description="They can be placed to the top, right, left, bottom, and be triggered on one or multiple events (such as click, focus, hover).">
             <OverlayTrigger trigger={['click']} placement="right" overlay={tooltipTwo()}>
                <span style={triggerStyle}>
                    <h3>Click me to trigger a tooltip</h3>
                </span>
            </OverlayTrigger>
        </StoryItem>
      </div>
    );
  });
