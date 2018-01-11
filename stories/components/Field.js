import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { Field, FieldAside, Button, Icon } from '../../lib/index';
import StoryItem from '../styleguide/StoryItem';

const mockValidations = [{
  text: 'Validation failed text',
  hasFailed: true,
}, {
  text: 'Validation text',
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
          instructions="Instruction text to help inform the user of what they're meant to write in this field."
          hasFormatting
        >
          <div>
            <h1>Heading content</h1>
            <p>The fossil record indicates that birds evolved from feathered ancestors within the theropod group, which are traditionally placed within the saurischian dinosaurs, though a 2017 paper[4] has put them in a proposed clade Ornithoscelida, along with the Ornithischia.</p>
            <FieldAside>
              <div className="field__aside-action">
                <Button
                  types={['icon-only', 'hover-transform', 'contained']}
                  clickHandler={() => action('field aside action clicked')}
                >
                  <Icon name="comment" size="small" />
                </Button>
              </div>
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

      <StoryItem
        title="Field (Editing)"
        description="A field component when in an editing state"
      >
        <Field
          fieldId="123"
          label="Field label text"
          instructions="Instruction text to help inform the user of what they are mean't to add into this field."
          canEdit
          actions={mockActions}
         >
          <div>Hello world...
          <FieldAside>
            <div className="field__aside-action">
              <Button
                className="field-aside__button"
                types={['icon-only', 'hover-transform']}
                clickHandler={() => action('field aside action clicked')}
              >
                <Icon name="caretUp" size="small" />
              </Button>
              <Button
                className="field-aside__button"
                types={['icon-only', 'hover-transform']}
                clickHandler={() => action('field aside action clicked')}
              >
                <Icon name="caret" size="small" />
              </Button>
              <Button
                className="field-aside__button"
                types={['icon-only', 'hover-transform']}
                clickHandler={() => action('field aside action clicked')}
              >
                <Icon name="trash" size="small" />
              </Button>
            </div>
          </FieldAside>
          </div>
         </Field>
      </StoryItem>
    </div>
  ));
