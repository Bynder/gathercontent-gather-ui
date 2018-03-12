import React from 'react';
import { storiesOf, action } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import {
  List,
  ListItem,
  StatusIndicator,
  Button,
  Icon,
  TooltipWrapper,
} from '../../lib';

const addNewItemButton = (size, placement, id, tooltipText) => (
  <TooltipWrapper
    id={id}
    tooltipText={tooltipText}
    placement={placement}
  >
    <Button
      types={['icon-only']}
      clickHandler={action('add new item')}
    >
      <Icon
        size={size}
        name="plus"
      />
    </Button>
  </TooltipWrapper>
);

const statusWithTooltip = (color, placement, id, tooltipText) => (
  <TooltipWrapper
    id={id}
    tooltipText={tooltipText}
    placement={placement}
  >
    <StatusIndicator color={color} />
  </TooltipWrapper>
);

const overdueTitle = (title, id) => (
  <TooltipWrapper
    id={id}
    tooltipText="Overdue"
  >
    <span className="color-overdue"><a href="/#">{title}</a></span>
  </TooltipWrapper>
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
        <ListItem title={overdueTitle('Row title 1', 'id-20')} />
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
          action={addNewItemButton('minor-2', 'bottom', 'id-3', 'Add new item')}
          borderedRight
        >
          <ListItem
            indicator={statusWithTooltip('green', 'bottom', 'id-7', 'Research')}
            title={<a href="/#">Row title 1</a>}
            label="entry parent"
            action={addNewItemButton('small-2', 'bottom', 'id-4', 'Add entry item')}
          >
            <ListItem
              indicator={statusWithTooltip('blue', 'bottom', 'id-6', 'Review')}
              title={<a href="/#">Row title 2</a>}
              label="entry"
            />
            <ListItem
              indicator={statusWithTooltip('orange', 'bottom', 'id-8', 'Publish')}
              title={overdueTitle('Row title 3', 'id-920')}
              label="entry"
            />
          </ListItem>
        </List>
      </StoryItem>
    </div>
  ));
