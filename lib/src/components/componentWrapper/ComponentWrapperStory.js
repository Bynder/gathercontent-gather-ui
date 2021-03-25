import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { ComponentWrapper, ColField, ButtonIcon } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import TextPreviewSVG from '../../../../assets/text-preview.svg';

const Aside = (
  <>
    <ButtonIcon name="trash" size={ButtonIcon.sizes.sm} />
    <ButtonIcon name="pencil" size={ButtonIcon.sizes.sm} className="mx-1" />
    <ButtonIcon name="repeatable" size={ButtonIcon.sizes.sm} />
  </>
);

storiesOf('Components', module).add('ComponentWrapper', () => {
  const bodyHovered = boolean('Body Hovered', false);
  const editable = boolean('Editable', true);
  const isSelected = boolean('Selected', false);
  const counter = number('Counter', null);

  return (
    <>
      <StoryItem title="ComponentWrapper" description=" A component component">
        <Row>
          <Col xs={12} sm={8} smOffset={2}>
            <ComponentWrapper
              editable={editable}
              label="Hello!"
              onLabelChange={() => {}}
              instructions="hello do a thing"
              onInstructionChange={() => {}}
              headerAside={Aside}
              subLabel="(Goodbye!)"
              isSelected={isSelected}
              counter={counter}
            >
              <ColField className="mb-10">
                <ColField.Header>
                  <ColField.Label label="Howdy" />
                </ColField.Header>
                <ColField.Body>
                  <div className="py-5 px-6 text-center">
                    <TextPreviewSVG />
                  </div>
                </ColField.Body>
                <ColField.Footer>
                  <ColField.Instructions instructions="Lots of instructions here how fun blabla." />
                </ColField.Footer>
              </ColField>
              <ColField>
                <ColField.Header>
                  <ColField.Label label="Howdy" />
                </ColField.Header>
                <ColField.Body>
                  <div className="py-5 px-6 text-center">
                    <TextPreviewSVG />
                  </div>
                </ColField.Body>
                <ColField.Footer>
                  <ColField.Instructions instructions="Lots of instructions here how fun blabla." />
                </ColField.Footer>
              </ColField>
            </ComponentWrapper>
          </Col>
        </Row>
      </StoryItem>

      <StoryItem title="ComponentWrapper" description=" A sectioned component">
        <Row>
          <Col xs={12} sm={8} smOffset={2}>
            <ComponentWrapper.Header
              editable={editable}
              label="I'm split up!"
              onLabelChange={() => {}}
              isSelected={isSelected}
              counter={counter}
            />
            <ComponentWrapper.Body
              editable={editable}
              isSelected={isSelected}
              hovered={bodyHovered}
            >
              <ColField>
                <ColField.Header>
                  <ColField.Label label="Howdy" />
                </ColField.Header>
                <ColField.Body>
                  <div className="py-5 px-6 text-center">
                    <TextPreviewSVG />
                  </div>
                </ColField.Body>
                <ColField.Footer>
                  <ColField.Instructions instructions="Lots of instructions here how fun blabla." />
                </ColField.Footer>
              </ColField>
            </ComponentWrapper.Body>
            <ComponentWrapper.Footer
              editable={editable}
              isSelected={isSelected}
              hovered={bodyHovered}
            >
              <ColField className="mt-6">
                <ColField.Header>
                  <ColField.Label label="Howdy" />
                </ColField.Header>
                <ColField.Body>
                  <div className="py-5 px-6 text-center">
                    <TextPreviewSVG />
                  </div>
                </ColField.Body>
                <ColField.Footer>
                  <ColField.Instructions instructions="Lots of instructions here how fun blabla." />
                </ColField.Footer>
              </ColField>
            </ComponentWrapper.Footer>
          </Col>
        </Row>
      </StoryItem>
    </>
  );
});
