import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Field from '../../lib/Field/';
import StoryItem from '../styleguide/StoryItem';

const mockValidations = [{
  text: '120/100',
  hasFailed: true,
}];

const mockActions = [{
  text: 'test action',
  clickHandler: action('action clicked'),
}];

storiesOf('Components', module)
  .add('Field', () => {
    return (
      <div>
        <StoryItem
          title="Field"
          description="A field component">
          <Field
            label="Test Label Text"
            actions={mockActions}
            validations={mockValidations}
            guidelines="Guideline text here!!!"
          >
            <div>Add editor component here from app!</div>
          </Field>
        </StoryItem>
      </div>
    );
  });
