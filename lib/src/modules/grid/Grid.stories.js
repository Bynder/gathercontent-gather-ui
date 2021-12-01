import React from 'react';
import StoryItem from 'stories/styleguide/StoryItem';
import { Grid as GridComponent, Row, Col } from 'lib';

export default {
  title: 'src/Grid',
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
