import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { withKnobs } from '@storybook/addon-knobs';
import { Input, Label, TextForm } from 'lib';
import { createDelayedPromise } from '../../../../stories/helpers/createDelayedPromise';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

const FormStory = storiesOf('Components', module).add('TextForm', () => {
  const promise = createDelayedPromise(1000);

  return (
    <StoryItem>
      <TextForm onSubmit={promise}>
        <Label htmlFor="test">Label</Label>
        <Input id="test" />
        <TextForm.Submission />
      </TextForm>
    </StoryItem>
  );
});

export { FormStory };
