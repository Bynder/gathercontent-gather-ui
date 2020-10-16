import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pill, Meta, FileCard } from 'lib';
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import StoryItem from 'stories/styleguide/StoryItem';

const stories = storiesOf('Components/Files', module);
stories.addDecorator(withKnobs);

stories.add('FileCard', () => {
  // const label = text('Field label', 'Field label text');
  // const isRepeatable = boolean('Is repeatable?', true);

  const thumb = (
    <div>thumb</div>
  );

  const meta = (
    <Meta>
      <Meta.Heading>
        <h3 className="text-inherit m-0">
          <a href="#" className="text-inherit no-underline hover:underline">Flower.jpg</a>
        </h3>
      </Meta.Heading>

      <Meta.Text>
        <p className="text-inherit m-0">Uploaded one week ago</p>
      </Meta.Text>

      <Meta.Footer>
        <Pill type="purple" size="xs" className="mr-2">JPG</Pill>
        1.4 MB
      </Meta.Footer>
    </Meta>
  )

  return (
    <StoryItem
      title="FileCard"
      description="..."
    >
      <FileCard thumb={thumb} meta={meta} />
    </StoryItem>
  );
});
