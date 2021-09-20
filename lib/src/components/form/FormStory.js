import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { radios, boolean, withKnobs } from '@storybook/addon-knobs';
import { Label, RadioInput, TextForm } from 'lib';
import { createDelayedPromise } from '../../../../stories/helpers/createDelayedPromise';
import { createFailedPromise } from '../../../../stories/helpers/createFailedPromise';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

const FormStory = storiesOf('Components', module).add('TextForm', () => {
  const promise = createDelayedPromise(1000);
  const failedPromise = createFailedPromise(1000);

  const inputSize = radios(
    'Input Size',
    {
      md: 'md',
      sm: 'sm',
    },
    'md'
  );

  const buttonSize = radios(
    'Button Size',
    {
      md: 'md',
      sm: 'sm',
      xs: 'xs',
    },
    'md'
  );

  const failureExample = boolean('Show failure example', false, '');

  return (
    <>
      <StoryItem>
        <TextForm onSubmit={failureExample ? failedPromise : promise}>
          <TextForm.Body>
            <Label htmlFor="test">Label</Label>
            <TextForm.Input id="test" size={inputSize} />
            <TextForm.Helper>Ops!</TextForm.Helper>
          </TextForm.Body>
          <TextForm.Submission>
            <TextForm.CancelButton size={buttonSize} onClick={() => {}} />
            <TextForm.SubmitButton size={buttonSize} />
          </TextForm.Submission>
        </TextForm>
      </StoryItem>

      <StoryItem>
        <TextForm onSubmit={failureExample ? failedPromise : promise} inline>
          <TextForm.Body>
            <Label htmlFor="test-inline" className="visually-hidden">
              Label
            </Label>
            <TextForm.Input id="test-inline" size={inputSize} value="value" />
            <TextForm.Helper>Ops!</TextForm.Helper>
          </TextForm.Body>
          <TextForm.Submission>
            <TextForm.SubmitButton size={buttonSize} />
          </TextForm.Submission>
        </TextForm>
      </StoryItem>

      <StoryItem>
        <TextForm onSubmit={failureExample ? failedPromise : promise} inline>
          <TextForm.Fieldset>
            <TextForm.Legend>Favourite Colour</TextForm.Legend>
            <TextForm.Body>
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
            </TextForm.Body>
            <TextForm.Submission>
              <TextForm.SubmitButton size={buttonSize} />
            </TextForm.Submission>
          </TextForm.Fieldset>
        </TextForm>
      </StoryItem>
    </>
  );
});

export { FormStory };
