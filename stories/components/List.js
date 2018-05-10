import React from 'react';
import { storiesOf, action } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import {
  List,
  ListItem,
  ItemRow,
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
          <ListItem>List item text</ListItem>
          <ListItem action={addNewItemButton('small', 'bottom', 'id-2', 'Add entry item')} isCurrent>
            List item text
            <List>
              <ListItem>List item text</ListItem>
              <ListItem>List item text</ListItem>
            </List>
          </ListItem>
        </List>
      </StoryItem>

      <StoryItem title="List (boarded)">
        <List
          title="Project Name"
          action={addNewItemButton('minor', 'bottom', 'id-12312312', 'Add new item')}
          bordered
        >
          <ListItem isCurrent>List item text</ListItem>
          <ListItem>List item text</ListItem>
        </List>
      </StoryItem>

      <StoryItem title="List: Full Example">
        <List
          title="Example Project Title"
          action={addNewItemButton('minor-2', 'bottom', 'id-32365689', 'Add new item')}
          borderedRight
        >
          <ListItem
            action={addNewItemButton('small-2', 'bottom', 'id-121212', 'Add entry item')}
            collapse
            isCurrent
          >
            <ItemRow
              indicator={statusWithTooltip('green', 'bottom', 'id-896727', 'Research')}
              label="entry parent"
            >
              <a href="/#">Item name 1</a>
            </ItemRow>

            <List>
              <ListItem collapse>
                <ItemRow
                  indicator={statusWithTooltip('blue', 'bottom', 'id-12376887', 'Review')}
                  label="entry"
                >
                  <a href="/#">Item name 2</a>
                </ItemRow>
              </ListItem>

              <ListItem collapse>
                <ItemRow
                  label="entry"
                  indicator={statusWithTooltip('orange', 'bottom', 'id-9356342', 'Publish')}
                >
                  {overdueTitle('Item name 3', 'id-78978984224')}
                </ItemRow>

                <List>
                  <ListItem collapse>
                    <ItemRow
                      label="entry"
                      indicator={statusWithTooltip('blue', 'bottom', 'id-7858757', 'Review')}
                    >
                      <a href="/#">Item name 4</a>
                    </ItemRow>
                  </ListItem>

                  <ListItem collapse>
                    <ItemRow
                      label="entry"
                      indicator={statusWithTooltip('orange', 'bottom', 'id-4444234', 'Publish')}
                    >
                      {overdueTitle('Item name 5', 'id-24288448')}
                    </ItemRow>
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </StoryItem>

      <StoryItem title="Bordered List: Full Example">
        <List
          title="Project Name"
          action={addNewItemButton('minor', 'bottom', 'id-12312312', 'Add new item')}
          bordered
          borderedLeft
        >
          <ListItem isCurrent>
            <ItemRow
              indicator={<StatusIndicator label="Approved" color="green" preText="Status:" small softLabel />}
              stacked
            >
              1st August 2018, 10:32am
            </ItemRow>
          </ListItem>
          <ListItem>
            <ItemRow
              indicator={<StatusIndicator label="Approved" color="green" preText="Status:" small softLabel />}
              stacked
            >
              1st August 2018, 10:32am
            </ItemRow>
          </ListItem>
        </List>
      </StoryItem>
    </div>
  ));
