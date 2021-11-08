import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pill, Meta, FileCard, PreviewImage, Controls, Loader } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import ConfirmationOverlay from '../../../../ConfirmationOverlay';

const stories = storiesOf('Components/Cards', module);
stories.addDecorator(withKnobs);

stories.add('FileCard', () => {
  const insetMeta = boolean('Inset meta', false, '');
  const previewFailedToLoad = boolean('Failed preview', false, '');
  const interactive = boolean('Interactive', false, '');
  const selected = boolean('Selected', false, '');
  const highlighted = boolean('Highlighted', false, '');
  const active = boolean('Active', false, '');
  const added = boolean('Added', false, '');
  const removed = boolean('Removed', false, '');
  const disabled = boolean('Disabled', false, '');
  const showLoader = boolean('Show loader', false, '');
  const onClick = interactive ? () => {} : null;

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

  const Preview = ({ children, loader }) => (
    <PreviewImage
      src={previewSrc}
      altText="preview image"
      title="preview image"
      loader={loader}
      showLoader={showLoader}
    >
      {children}
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
    <>
      <StoryItem
        title="FileCard"
        description="A card component which utilises the Preview, Meta and Control modules to display a file."
      >
        <ul className="list-none grid p-0 m-0 tw grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[...new Array(4)].map(i => (
            <li key={`file-card-${i}`}>
              <FileCard
                preview={<Preview />}
                controls={controls}
                meta={insetMeta && disabled ? null : meta}
                insetMeta={insetMeta}
                onClick={onClick}
                selected={selected}
                highlighted={highlighted}
                added={added}
                removed={removed}
                disabled={disabled}
                active={active}
              >
                {disabled && (
                  <ConfirmationOverlay
                    confirmationText="Delete"
                    confirm={() => {}}
                    cancel={() => {}}
                    show
                  />
                )}
              </FileCard>
            </li>
          ))}
        </ul>
      </StoryItem>

      <StoryItem
        title="FileCard (thumbnail usage)"
        description="A card component which utilises the thumbnail size to display a file at a reduced size."
      >
        <FileCard
          size="thumbnail"
          preview={<Preview loader={<Loader size="sm" />} />}
        />
      </StoryItem>

      <StoryItem
        title="FileCard (loading usage)"
        description="A card component which represents a loading file."
      >
        <div className="w-32 h-32">
          <FileCard className="h-full" innerClassName="h-full">
            <Loader size="sm" className="h-full" />
          </FileCard>
        </div>
      </StoryItem>
    </>
  );
});
