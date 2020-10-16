import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pill, Meta, FileCard, Thumb, Controls } from "lib";
import StoryItem from 'stories/styleguide/StoryItem';
import { boolean, withKnobs } from "@storybook/addon-knobs";

const stories = storiesOf('Components/Files', module);
stories.addDecorator(withKnobs);

stories.add('FileCard', () => {
  const insetMeta = boolean(
    'Inset meta',
    false,
    ''
  );

  const controls = (
    <Controls>
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
    </Controls>
  );

  const thumb = (
    <Thumb src="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922&h=300">
      {controls}
    </Thumb>
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
      description="A card component which utilises the thumb, meta and control modules to display a file."
    >
      <ul className="list-none grid p-0 m-0 tw grid-cols-2 sm:grid-cols-4 gap-4">
        <li>
          <FileCard
            thumb={thumb}
            meta={meta}
            insetMeta={insetMeta}
          />
        </li>
      </ul>
    </StoryItem>
  );
});
