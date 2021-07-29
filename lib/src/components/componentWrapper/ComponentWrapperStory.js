import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs';
import { ComponentWrapper, ColField, ButtonIcon, Row, Col } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import TextPreviewSVG from '../../../../assets/text-preview.svg';
import { componentStatuses } from './ComponentWrapper';

const Aside = (
  <>
    <ButtonIcon name="trash" size={ButtonIcon.sizes.sm} />
    <ButtonIcon name="pencil" size={ButtonIcon.sizes.sm} className="mx-1" />
    <ButtonIcon name="repeatable" size={ButtonIcon.sizes.sm} />
  </>
);

storiesOf('Components', module).add('ComponentWrapper', () => {
  const draggedOver = boolean('Dragged over', false);
  const editable = boolean('Editable', true);
  const isSelected = boolean('Selected', false);
  const isHovered = boolean('Hovered', false);
  const counter = number('Counter', null);

  const label = 'Status';
  const options = {
    None: null,
    ...componentStatuses
  };
  const defaultValue = 'None';

  const status = select(label, options, defaultValue);

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
              isHovered={isHovered}
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
              isHovered={isHovered}
            />
            <ComponentWrapper.Body
              editable={editable}
              isSelected={isSelected}
              draggedOver={draggedOver}
              isHovered={isHovered}
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
              draggedOver={draggedOver}
              isHovered={isHovered}
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

      <StoryItem title="ComponentWrapper" description="Statuses">
        <Row>
          <Col xs={12} sm={8} smOffset={2}>
            <ComponentWrapper.Header
              editable={editable}
              label="I'm split up!"
              onLabelChange={() => {}}
              isSelected={isSelected}
              counter={counter}
              isHovered={isHovered}
              status={status}
            />
            <ComponentWrapper.Body
              editable={editable}
              isSelected={isSelected}
              draggedOver={draggedOver}
              isHovered={isHovered}
              status={status}
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
              draggedOver={draggedOver}
              isHovered={isHovered}
              status={status}
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
