import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Grid as GridComponent, Row, Col } from 'lib';

export default {
  title: 'GUI/Grid',
  component: GridComponent
};

export const Grid = () => (
  <StoryItem title="Grid" description="Some layout components">
    <div>
      <GridComponent>
        <Row>
          <Col xs={12} sm={8} smOffset={2}>
            I'm a Col that has an offset of 2
          </Col>
          <Col xs={12} sm={2}>
            I'm also a Col
          </Col>
        </Row>
      </GridComponent>
    </div>
  </StoryItem>
);

Grid.parameters = {
  controls: { hideNoControlsWarning: true }
};
