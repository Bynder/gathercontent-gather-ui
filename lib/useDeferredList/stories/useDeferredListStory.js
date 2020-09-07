import React from 'react';
import { times } from 'lodash';
import { storiesOf } from '@storybook/react';
import { Waypoint } from 'react-waypoint';
import { useDeferredList } from '../useDeferredList';
import StoryItem from '../../../stories/styleguide/StoryItem';

const generateHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const UseDeferredListExample = () => {
  const list = times(1000, index => index);

  const { deferredList, loadItems } = useDeferredList({
    list,
    numberOfItemsToLoad: 5,
    initialItemCount: 10
  });

  return (
    <StoryItem
      title="useDeferredList"
      description="Example waypoint list using useDeferredList"
    >
      <div style={{ height: 500, 'overflow-y': 'scroll' }}>
        {deferredList.map(value => (
          <div
            style={{
              height: 200,
              width: 500,
              border: `5px dotted ${generateHexColor()}`
            }}
          >
            {value}
          </div>
        ))}
        <Waypoint onEnter={loadItems} />
      </div>
    </StoryItem>
  );
};

storiesOf('Hooks', module).add('useDeferredList', () => (
  <UseDeferredListExample />
));
