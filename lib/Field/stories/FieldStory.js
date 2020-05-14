import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Field } from 'lib';
import { boolean, radios, text } from '@storybook/addon-knobs';
import StoryItem from '../../../stories/styleguide/StoryItem';

const mockValidations = [
  {
    text: 'Validation failed text',
    hasFailed: true
  },
  {
    text: 'Validation text',
    hasFailed: false
  }
];

const mockActions = [
  {
    text: 'test action',
    clickHandler: action('action clicked')
  },
  {
    text: 'test action 2',
    clickHandler: action('action 2 clicked')
  }
];

storiesOf('Components', module).add('Field', () => {
  const dir = radios(
    'Text direction',
    {
      LTR: 'ltr',
      RTL: 'rtl'
    },
    'ltr'
  );
  const canEdit = boolean('Can edit', false);

  return (
    <>
      <StoryItem
        title="FieldNew"
        description="A newer, Field component, can contain Content and Meta"
      >
        <Field
          fieldId="123"
          actions={mockActions}
          validations={mockValidations}
          label={text('Field label', 'Field label text')}
          instructions={text(
            'Instructions',
            "Instruction text to help inform the user of what they're meant to write in this field. http://gathercontent.com"
          )}
          hasFormatting={boolean('Has formatting', true)}
          isActive={boolean('Is active', true)}
          disabled={boolean('Disabled', false)}
          canEdit={canEdit}
          dir={dir}
        >
          {!canEdit ? (
            <div>
              <h1>Heading content</h1>
              <p>
                The fossil record indicates that birds evolved from feathered
                ancestors within the theropod group, which are traditionally
                placed within the saurischian dinosaurs, though a 2017 paper[4]
                has put them in a proposed clade Ornithoscelida, along with the
                Ornithischia.
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <strong>Heading 1</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Heading 2</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Cell 1</p>
                    </td>
                    <td>
                      <p>Cell 2</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}
        </Field>
      </StoryItem>
      <StoryItem
        title="Field"
        description="A field component provides supporting UI for gathering content. The child component should be responsible for handling the gathering experience but this component renders labels, actions and validations to support that experience."
      >
        <Field
          fieldId="123"
          actions={mockActions}
          validations={mockValidations}
          label={text('Field label', 'Field label text')}
          instructions={text(
            'Instructions',
            "Instruction text to help inform the user of what they're meant to write in this field. http://gathercontent.com"
          )}
          hasFormatting={boolean('Has formatting', true)}
          isActive={boolean('Is active', true)}
          disabled={boolean('Disabled', false)}
          canEdit={canEdit}
          dir={dir}
        >
          {!canEdit ? (
            <div>
              <h1>Heading content</h1>
              <p>
                The fossil record indicates that birds evolved from feathered
                ancestors within the theropod group, which are traditionally
                placed within the saurischian dinosaurs, though a 2017 paper[4]
                has put them in a proposed clade Ornithoscelida, along with the
                Ornithischia.
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <strong>Heading 1</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Heading 2</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Cell 1</p>
                    </td>
                    <td>
                      <p>Cell 2</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}
        </Field>
      </StoryItem>
    </>
  );
});
