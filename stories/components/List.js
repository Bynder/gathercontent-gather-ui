import React from 'react';
import { storiesOf, action } from '@storybook/react';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import List from '../../lib/List';
import ListItem from '../../lib/List/ListItem';
import StoryItem from '../styleguide/StoryItem';
import StatusIndicator from '../../lib/StatusIndicator';
import Button from '../../lib/Button';
import Icon from '../../lib/Icon';

const addNewItemButton = (size, placement, id, tooltipText) => (
  <OverlayTrigger
    placement={placement}
    overlay={
      <Tooltip id={id}>
        {tooltipText}
      </Tooltip>
    }
  >
    <span className="tooltip__trigger-container">
      <Button
        types={['icon-only']}
        clickHandler={action('add new item')}
      >
        <Icon
          size={size}
          name="plus"
        />
      </Button>
    </span>
  </OverlayTrigger>
);

const statusWithTooltip = (color, placement, id, tooltipText) => (
  <OverlayTrigger
    placement={placement}
    overlay={
      <Tooltip id={id}>
        {tooltipText}
      </Tooltip>
    }
  >
    <span className="tooltip__trigger-container color-overdue">
      <StatusIndicator color={color} />
    </span>
  </OverlayTrigger>
);

const overdueTitle = (title, id) => (
  <OverlayTrigger
    placement="bottom"
    overlay={
      <Tooltip id={id}>Overdue</Tooltip>
    }
  >
    <span className="tooltip__trigger-container">
      <span className="color-overdue">{title}</span>
    </span>
  </OverlayTrigger>
);

storiesOf('Components', module)
  .add('List', () => (
    <div>
      <StoryItem
        title="List"
        description="A list has a header with a title and action & children."
      >
        <List
          title="Project Name"
          action={addNewItemButton('minor', 'bottom', 'id-1', 'Add new item')}
        >
          <ListItem title="Row title 1" />
          <ListItem title="Row title 2" />
          <ListItem title="Row title 3">
            <ListItem title="Row title 4" />
            <ListItem title="Row title 5">
              <ListItem title="Row title 6" />
              <ListItem title="Row title 7">
                <ListItem title="Row title 8" />
                <ListItem title="Row title 9">
                  <ListItem title="Row title 10" />
                  <ListItem title="Row title 11" />
                  <ListItem title="Row title 12" />
                </ListItem>
              </ListItem>
            </ListItem>
          </ListItem>
        </List>
      </StoryItem>

      <StoryItem
        title="ListItem: Indicator"
        description="A list item can render a component as an indicator."
      >
        <ListItem
          indicator={<StatusIndicator color="green" />}
          title="Row title"
        />
      </StoryItem>

      <StoryItem
        title="ListItem: Title Component"
        description="The title can be text or a component."
      >
        <ListItem
          title={
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="id-1">
                  Tooltip text
                </Tooltip>
              }
            >
              <span>Row title</span>
            </OverlayTrigger>
          }
        />
      </StoryItem>

      <StoryItem
        title="ListItem: Label & Action"
        description="To support the title a label can be provided as well as a component to perform an action."
      >
        <ListItem
          title="Row title"
          label="entry parent"
          action={addNewItemButton('small', 'bottom', 'id-2', 'Add entry item')}
        />
      </StoryItem>

      <StoryItem
        title="ListItem: Current"
        description="You can highlight which item is the current one e.g. in a navigation list which link is the current page."
      >
        <ListItem
          indicator={<StatusIndicator color="green" />}
          title="Row title 1"
          isCurrent
        />
      </StoryItem>

      <StoryItem title="List: Full Example">
        <List
          title="Example Project Title"
          action={addNewItemButton('minor', 'bottom', 'id-3', 'Add new item')}
        >
          <ListItem
            indicator={statusWithTooltip('green', 'bottom', 'id-7', 'Research')}
            title="Row title 1"
            label="entry parent"
            action={addNewItemButton('small', 'bottom', 'id-4', 'Add entry item')}
          >
            <ListItem
              indicator={statusWithTooltip('blue', 'bottom', 'id-6', 'Review')}
              title="Row title 2"
              label="entry"
            />
            <ListItem
              indicator={statusWithTooltip('orange', 'bottom', 'id-8', 'Publish')}
              title={overdueTitle('Row title 3')}
              label="entry"
            />
          </ListItem>
        </List>
      </StoryItem>
    </div>
  ));
