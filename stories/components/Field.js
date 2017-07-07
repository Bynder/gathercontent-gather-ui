import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Field from '../../lib/Field';
import StoryItem from '../styleguide/StoryItem';

const mockValidations = [{
  text: '120/100',
  hasFailed: true,
}, {
  text: 'Validation failed text',
  hasFailed: false,
}];

const mockActions = [{
  text: 'test action',
  clickHandler: action('action clicked'),
}, {
  text: 'test action 2',
  clickHandler: action('action 2 clicked'),
}];

storiesOf('Components', module)
  .add('Field', () => {
    return (
      <div>
        <StoryItem
          title="Field"
          description="A field component provides supporting UI for gathering content. The child component should be responsible for handling the gathering experience but this component renders labels, actions and validations to support that experience."
        >
          <Field
            label="Field label text"
            actions={mockActions}
            validations={mockValidations}
            instructions="Instruction text to help inform the user of what they are mean't to add into this field."
          >
            <small><i>A child component will be rendered here...</i></small>
          </Field>
        </StoryItem>

        <StoryItem
          title="Field (loading)"
          description="A field component when loading">
          <Field isLoading={true} />
        </StoryItem>

        <StoryItem
          title="Field (read only)"
          description="A field component when it's read only">
          <Field isReadOnly={true} />
        </StoryItem>
      </div>
    );
  });
