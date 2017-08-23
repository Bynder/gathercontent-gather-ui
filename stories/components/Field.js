import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { Field, FieldAside, Button, Icon } from '../../lib/index';
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
  .add('Field', () => (
    <div>
      <StoryItem
        title="Field"
        description="A field component provides supporting UI for gathering content. The child component should be responsible for handling the gathering experience but this component renders labels, actions and validations to support that experience."
      >
        <Field
          fieldId="123"
          label="Field label text"
          actions={mockActions}
          validations={mockValidations}
          instructions="Instruction text to help inform the user of what they are mean't to add into this field."
        >
          <div>
            <p>Hello world...</p>
            <FieldAside>
              <Button
                className="field__aside-action"
                types={['icon-only']}
                clickHandler={() => action('field aside action clicked')}
              >
                <Icon name="plus" size="small" />
              </Button>
            </FieldAside>
          </div>
        </Field>
      </StoryItem>

      <StoryItem
        title="Field (loading)"
        description="A field component when loading"
      >
        <Field isLoading fieldId="321" />
      </StoryItem>

      <StoryItem
        title="Field (read only)"
        description="A field component when it's read only"
      >
        <Field isReadOnly fieldId="987" />
      </StoryItem>
    </div>
  ));
