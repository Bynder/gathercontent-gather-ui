import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import ColField from 'lib/ColField/ColField';
import { Col, Row } from 'lib';
import StoryItem from '../../../stories/styleguide/StoryItem';
import TextPreviewSVG from '../../../assets/text-preview.svg';

storiesOf('Components', module).add('ColField', () => {
  const visible = boolean('Visible', true);
  const editable = boolean('Editable', true);
  const selected = boolean('Seleted', false);
  const hovered = boolean('Hovered', false);

  return (
    <>
      <StoryItem title="ColField">
        <Row>
          <Col xs={12} sm={8} smOffset={2}>
            <ColField
              visible={visible}
              isSelected={selected}
              isHovered={hovered}
            >
              <ColField.Header>
                <ColField.Label
                  editable={editable}
                  onChange={() => {}}
                  label="Howdy"
                />
              </ColField.Header>
              <ColField.Body>
                <div className="py-5 px-6 text-center">
                  <TextPreviewSVG />
                </div>
              </ColField.Body>
              <ColField.Footer>
                <ColField.Instructions
                  editable
                  onChange={() => {}}
                  instructions="Lots of instructions here how fun blabla."
                />
              </ColField.Footer>
            </ColField>
          </Col>
        </Row>
      </StoryItem>
    </>
  );
});
