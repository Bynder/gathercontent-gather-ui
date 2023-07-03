import React from "react";
import {
  Pill,
  Meta,
  FileCard as FileCardComponent,
  PreviewImage,
  Controls,
  Loader,
} from "lib";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'uuid... Remove this comment to see the full error message
import uuid from "uuid/v1";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";
import ConfirmationOverlay from "../../../../ConfirmationOverlay";

export default {
  title: "GUI/Cards/File Card",
  component: FileCardComponent,
  args: {
    insetMeta: false,
    previewFailedToLoad: false,
    interactive: false,
    selected: false,
    highlighted: false,
    active: false,
    added: false,
    removed: false,
    disabled: false,
    showLoader: false,
    imgHeight: 500,
    imgWidth: 500,
  },
};

export const FileCard = (args: any) => {
  const onClick = args.interactive ? () => {} : null;

  const controls = (
    <Controls animateFromTop>
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
      <Controls.Control iconName="commentsMulti16" onClick={() => {}} />
    </Controls>
  );

  const previewSrc = args.previewFailedToLoad
    ? "http://fail"
    : `http://placeimg.com/${args.imgWidth}/${args.imgHeight}/animals`;

  const Preview = ({ children, loader }: any) => (
    // @ts-expect-error
    <PreviewImage
      src={previewSrc}
      altText="preview image"
      title="preview image"
      loader={loader}
      showLoader={args.showLoader}
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
          {[...new Array(4)].map(() => {
            return (
              <li key={`file-card-${uuid()}`}>
                <FileCardComponent
                  preview={<Preview />}
                  controls={controls}
                  meta={args.insetMeta && args.disabled ? null : meta}
                  onClick={onClick}
                  {...args}
                >
                  {args.disabled && (
                    <ConfirmationOverlay
                      confirmationText="Delete"
                      confirm={() => {}}
                      cancel={() => {}}
                      show
                    />
                  )}
                </FileCardComponent>
              </li>
            );
          })}
        </ul>
      </StoryItem>

      <StoryItem
        title="FileCard (thumbnail usage)"
        description="A card component which utilises the thumbnail size to display a file at a reduced size."
      >
        <FileCardComponent
          // @ts-expect-error
          size="thumbnail"
          // @ts-expect-error
          preview={<Preview loader={<Loader size="sm" />} />}
        />
      </StoryItem>

      <StoryItem
        title="FileCard (loading usage)"
        description="A card component which represents a loading file."
      >
        <div className="w-32 h-32">
          {/* @ts-expect-error */}
          <FileCardComponent className="h-full" innerClassName="h-full">
            {/* @ts-expect-error */}
            <Loader size="sm" className="h-full" />
          </FileCardComponent>
        </div>
      </StoryItem>
    </>
  );
};
