import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { number } from '@storybook/addon-knobs';
import notes from '../README.md';
import StoryItem from '../../../stories/styleguide/StoryItem';
import ApprovedLabel from '..';

storiesOf('Components', module).add(
  'ApprovedLabel',
  () => {
    const numberOfApprovals = number('Number of approvals', 3);
    const approvedBy = [...new Array(numberOfApprovals)].map(() =>
      faker.internet.email()
    );

    return (
      <StoryItem
        title="Approved Label"
        description="Renders a approved icon, the number of approvals and a tooltip with specific names of users who have approved"
      >
        <ApprovedLabel approvedBy={approvedBy} />
      </StoryItem>
    );
  },
  { notes }
);
