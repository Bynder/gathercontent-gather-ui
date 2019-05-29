import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col, Row } from "react-bootstrap";
import { ImageLoader } from '../../../lib';
import StoryItem from '../../styleguide/StoryItem';

storiesOf('Components', module).add('ImageLoader', () => (
  <div>
    <StoryItem
      title="Image loaders"
      description="The image loader adds visual ques for states such as loading, loaded and failures for images."
    >
      <Row>
        <Col xs={6}>
          <ImageLoader src="https://fillmurray.com/g/400/400" alt="Fill Murray" preLoadStyles={{ minHeight: '400px' }} />
        </Col>
        <Col xs={6}>
          <ImageLoader src="" alt="a failed image" preLoadStyles={{ minHeight: '400px' }} />
        </Col>
      </Row>
    </StoryItem>
  </div>
));
