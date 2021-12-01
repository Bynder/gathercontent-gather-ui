import React from 'react';
import { Col, ImageLoader, Row } from '../../../lib';
import StoryItem from '../../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _ImageLoader = () => (
  <div>
    <StoryItem
      title="Image loaders"
      description="The image loader adds visual ques for states such as loading, loaded and failures for images."
    >
      <Row>
        <Col xs={6}>
          <ImageLoader
            src="https://fillmurray.com/g/400/400"
            alt="Fill Murray"
            preLoadedStyles={{ minHeight: '400px' }}
          />
        </Col>
        <Col xs={6}>
          <ImageLoader
            src=""
            alt="a failed image"
            preLoadedStyles={{ minHeight: '400px' }}
          />
        </Col>
      </Row>
    </StoryItem>
  </div>
);

_ImageLoader.story = {
  name: 'ImageLoader',
};
