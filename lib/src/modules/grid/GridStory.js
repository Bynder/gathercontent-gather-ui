import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { date, text } from '@storybook/addon-knobs';
import { Grid, Row, Col } from 'lib';

storiesOf('Components', module).add('Grid', () => {
  const displayDate = date('Date');
  const subtext = text('Subtext', 'Some optional extra text.');

  return (
    <StoryItem title="Grid" description="Some layout components">
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={8} smOffset={2}>
              I'm a Col that has an offset of 2
            </Col>
            <Col xs={12} sm={2}>
              I'm also a Col
            </Col>
          </Row>
        </Grid>
      </div>
    </StoryItem>
  );
});
