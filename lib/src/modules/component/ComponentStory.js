import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Component, ColField, ButtonIcon } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import TextPreviewSVG from '../../../../assets/text-preview.svg';

const Aside = (
  <>
    <ButtonIcon name="trash" size={ButtonIcon.sizes.sm} />
    <ButtonIcon name="pencil" size={ButtonIcon.sizes.sm} className="mx-1" />
    <ButtonIcon name="repeatable" size={ButtonIcon.sizes.sm} />
  </>
);

storiesOf('Components', module).add('Component', () => {
  const editable = boolean('Editable', true);

  return (
    <>
      <StoryItem title="Component" description=" A component component">
        <Row>
          <Col xs={12} sm={8} smOffset={2}>
            <Component
              editable={editable}
              label="Hello!"
              onLabelChange={() => {}}
              instructions="hello do a thing"
              onInstructionChange={() => {}}
              headerAside={Aside}
              subLabel="(Goodbye!)"
            >
              <ColField className="mb-5">
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
            </Component>
          </Col>
        </Row>
      </StoryItem>

      <StoryItem title="Component" description=" A sectioned component">
        <Row>
          <Col xs={12} sm={8} smOffset={2}>
            <Component.Header
              editable={editable}
              label="I'm split up!"
              onLabelChange={() => {}}
            />
            <Component.Body editable={editable}>
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
            </Component.Body>
            <Component.Footer editable={editable}>
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
            </Component.Footer>
          </Col>
        </Row>
      </StoryItem>
    </>
  );
});
