import * as React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Label, RadioInput, TextForm as TextFormComponent } from 'lib';
import { createDelayedPromise } from '../../../../stories/helpers/createDelayedPromise';
import { createFailedPromise } from '../../../../stories/helpers/createFailedPromise';

export default {
  title: 'GUI/Form/Text Form',
  component: TextFormComponent,
  args: {
    showFailure: false,
    inputSize: 'md',
    buttonSize: 'md'
  },
  argTypes: {
    inputSize: {
      name: 'Input size',
      control: { type: 'radio' },
      options: ['md', 'sm']
    },
    buttonSize: {
      name: 'Button size',
      control: { type: 'radio' },
      options: ['md', 'sm', 'xs']
    }
  }
};

export const TextForm = (args: any) => {
  const promise = createDelayedPromise(1000);
  const failedPromise = createFailedPromise(1000);

  return (
    <>
      <StoryItem>
        <TextFormComponent
          onSubmit={args.showFailure ? failedPromise : promise}
        >
          <TextFormComponent.Body>
            <Label htmlFor="test">Label</Label>
            <TextFormComponent.Input id="test" size={args.inputSize} />
            <TextFormComponent.Helper>Ops!</TextFormComponent.Helper>
          </TextFormComponent.Body>
          <TextFormComponent.Submission>
            <TextFormComponent.CancelButton
              size={args.buttonSize}
              onClick={() => {}}
            />
            <TextFormComponent.SubmitButton size={args.buttonSize} />
          </TextFormComponent.Submission>
        </TextFormComponent>
      </StoryItem>

      <StoryItem>
        <TextFormComponent
          onSubmit={args.showFailure ? failedPromise : promise}
          inline
        >
          <TextFormComponent.Body>
            <Label htmlFor="test-inline" className="visually-hidden">
              Label
            </Label>
            <TextFormComponent.Input
              id="test-inline"
              size={args.inputSize}
              value="value"
            />
            <TextFormComponent.Helper>Ops!</TextFormComponent.Helper>
          </TextFormComponent.Body>
          <TextFormComponent.Submission>
            <TextFormComponent.SubmitButton size={args.buttonSize} />
          </TextFormComponent.Submission>
        </TextFormComponent>
      </StoryItem>

      <StoryItem>
        <TextFormComponent
          onSubmit={args.showFailure ? failedPromise : promise}
          inline
        >
          <TextFormComponent.Fieldset>
            <TextFormComponent.Legend>
              Favourite Colour
            </TextFormComponent.Legend>
            <TextFormComponent.Body>
              <div className="mb-2">
                <RadioInput
                  type="radio"
                  name="colour"
                  id="blue"
                  value="blue"
                  className="mr-2"
                />
                <label htmlFor="blue">Blue</label>
              </div>
              <div className="mb-2">
                <RadioInput
                  type="radio"
                  name="colour"
                  id="red"
                  value="red"
                  className="mr-2"
                />
                <label htmlFor="red">Red</label>
              </div>
              <div className="mb-2">
                <RadioInput
                  type="radio"
                  name="colour"
                  id="green"
                  value="green"
                  className="mr-2"
                />
                <label htmlFor="green">Green</label>
              </div>
            </TextFormComponent.Body>
            <TextFormComponent.Submission>
              <TextFormComponent.SubmitButton size={args.buttonSize} />
            </TextFormComponent.Submission>
          </TextFormComponent.Fieldset>
        </TextFormComponent>
      </StoryItem>
    </>
  );
};
