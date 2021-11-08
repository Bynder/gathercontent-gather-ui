import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { Grid, Row, Col } from 'lib';

storiesOf('Components', module).add('Grid', () => (
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
));