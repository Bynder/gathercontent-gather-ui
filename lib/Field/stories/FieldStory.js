import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Field, FieldNew } from 'lib';
import { boolean, radios, select, text, number } from '@storybook/addon-knobs';
import cx from 'classnames';
import StoryItem from '../../../stories/styleguide/StoryItem';
import {
  ACTIVE,
  ADDED,
  DELETED,
  MOVED_DOWN,
  MOVED_UP,
  UNCHANGED
} from '../FieldContent';

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
  const inStructureEditMode = boolean('In Structure Edit Mode', false);

  const label = text('Field label', 'Field label text');
  const isActive = boolean(
    'Is active (only used by old component, use the state selector for NewField)',
    true
  );
  const instructions = text(
    'Instructions',
    "Instruction text to help inform the user of what they're meant to write in this field. http://gathercontent.com"
  );
  const status = select(
    'Status',
    {
      Unchanged: UNCHANGED,
      Active: ACTIVE,
      Added: ADDED,
      Deleted: DELETED,
      'Moved up': MOVED_UP,
      'Moved Down': MOVED_DOWN
    },
    UNCHANGED
  );

  const isRepeatable = boolean('Is repeatable?', true);
  return (
    <>
      <StoryItem
        title="FieldNew"
        description="A newer, Field component, can contain Content and Meta"
      >
        <FieldNew
          className={cx({ 'field-active': status === ACTIVE })}
          dir={dir}
          inStructureEditMode={inStructureEditMode}
        >
          <FieldNew.Meta>
            {isRepeatable && (
              <FieldNew.RepeatableControls
                repeatPosition={number('Repeat position', 1)}
                isLastRepeat={boolean('Is last', false)}
                isActive={status === ACTIVE}
              />
            )}
            <FieldNew.Label
              className={cx({
                'text-right': dir === 'ltr',
                'text-left': dir === 'rtl',
                'pt-8': !isRepeatable
              })}
            >
              {label}
            </FieldNew.Label>
            <FieldNew.Validations
              validations={mockValidations}
              fieldId="123"
              className="flex-col items-end"
            />
            <FieldNew.Actions
              actions={mockActions}
              fieldId="123"
              className="items-end"
            />
          </FieldNew.Meta>
          <FieldNew.Content
            instructions={
              <FieldNew.Instructions>{instructions}</FieldNew.Instructions>
            }
            status={status}
          >
            {!inStructureEditMode ? (
              <div>
                <h1>Heading content</h1>
                <p>
                  The fossil record indicates that birds evolved from feathered
                  ancestors within the theropod group, which are traditionally
                  placed within the saurischian dinosaurs, though a 2017
                  paper[4] has put them in a proposed clade Ornithoscelida,
                  along with the Ornithischia.
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
            ) : (
              <div className="p-3" />
            )}
          </FieldNew.Content>
        </FieldNew>
      </StoryItem>
      <StoryItem
        title="Field"
        description="A field component provides supporting UI for gathering content. The child component should be responsible for handling the gathering experience but this component renders labels, actions and validations to support that experience."
      >
        <Field
          fieldId="123"
          actions={mockActions}
          validations={mockValidations}
          label={label}
          instructions={instructions}
          hasFormatting={boolean('Has formatting', true)}
          isActive={isActive}
          disabled={boolean('Disabled', false)}
          canEdit={inStructureEditMode}
          dir={dir}
        >
          {!inStructureEditMode ? (
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
