import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pill, Meta, FileCard, PreviewImage, Controls } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import { boolean, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Components/Files', module);
stories.addDecorator(withKnobs);

stories.add('FileCard', () => {
  const insetMeta = boolean('Inset meta', false, '');
  const previewFailedToLoad = boolean('Failed preview', false, '');

  const controls = (
    <Controls animateFromTop>
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
    </Controls>
  );

  const previewSrc = previewFailedToLoad
    ? 'http://fail'
    : 'http://placeimg.com/500/500/animals';

  const preview = (
    <PreviewImage
      src={previewSrc}
      altText="preview image"
      title="preview image"
    >
      {controls}
    </PreviewImage>
  );

  const meta = (
    <Meta>
      <Meta.Heading>
        <h3 className="text-inherit m-0">
          <a href="/" className="text-inherit no-underline hover:underline">
            Flower.jpg
          </a>
        </h3>
      </Meta.Heading>

      <Meta.Text>
        <p className="text-inherit m-0">Uploaded one week ago</p>
      </Meta.Text>

      <Meta.Footer>
        <Pill type="purple" size="xs" className="mr-2">
          JPG
        </Pill>
        1.4 MB
      </Meta.Footer>
    </Meta>
  );

  return (
    <StoryItem
      title="FileCard"
      description="A card component which utilises the thumb, meta and control modules to display a file."
    >
      <ul className="list-none grid p-0 m-0 tw grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <li>
          <FileCard preview={preview} meta={meta} insetMeta={insetMeta} />
        </li>
      </ul>
    </StoryItem>
  );
});
