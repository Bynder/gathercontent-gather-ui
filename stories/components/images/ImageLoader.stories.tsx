import React from 'react';
import { Col, ImageLoader as ImageLoaderComponent, Row } from '../../../lib';
import StoryItem from '../../styleguide/StoryItem';

export default {
  title: 'Legacy/Image Loader',
  component: ImageLoaderComponent
};

export const ImageLoader = () => (
  <div>
    <StoryItem
      title="Image loaders"
      description="The image loader adds visual ques for states such as loading, loaded and failures for images."
    >
      <Row>
        <Col xs={6}>
          <ImageLoaderComponent
            src="https://fillmurray.com/g/400/400"
            alt="Fill Murray"
            preLoadedStyles={{ minHeight: '400px' }}
          />
        </Col>
        <Col xs={6}>
          <ImageLoaderComponent
            src=""
            alt="a failed image"
            preLoadedStyles={{ minHeight: '400px' }}
          />
        </Col>
      </Row>
    </StoryItem>
  </div>
);

ImageLoader.parameters = {
  controls: { hideNoControlsWarning: true }
};
