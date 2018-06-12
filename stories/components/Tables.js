import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Table from '../../lib/Table/';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Tables', () => {
    return (
      <div>
        <StoryItem
        title="Table heading"
        description="A component that renders a table heading.">
          <Table.Heading
            sortHandler={ action('sortHandler') }
            columns={['Name', 'Archived by', 'On']}
            toggleHandler={ action('toggleHandler') }
            activeSortingProp="Name"
            sortingOrder={1}
            columnNameSanitiser={ (text) => { return text; } }
          />
        </StoryItem>
      </div>
    );
  });
