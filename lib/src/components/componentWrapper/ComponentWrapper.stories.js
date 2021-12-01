import React from 'react';
import {
  ComponentWrapper as ComponentWrapperComponent,
  ColField,
  ButtonIcon,
  Row,
  Col
} from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import TextPreviewSVG from '../../../../assets/text-preview.svg';
import { componentStatuses } from './ComponentWrapper';

export default {
  title: 'src/Component Wrapper',
  component: ComponentWrapperComponent,
  args: {
    draggedOver: false,
    editable: false,
    isSelected: false,
    isHovered: false,
    counter: 1
  },
  argTypes: {
    counter: {
      name: 'counter',
      control: { type: 'number' }
    },
    status: {
      name: 'Status',
      options: ['None', ...Object.values(componentStatuses)],
      control: { type: 'select' }
    }
  }
};

const Aside = (
  <>
    <ButtonIcon name="trash" size={ButtonIcon.sizes.sm} />
    <ButtonIcon name="pencil" size={ButtonIcon.sizes.sm} className="mx-1" />
    <ButtonIcon name="repeatable" size={ButtonIcon.sizes.sm} />
  </>
);

export const ComponentWrapper = args => (
  <>
    <StoryItem
      title="ComponentWrapperComponent"
      description=" A component component"
    >
      <Row>
        <Col xs={12} sm={8} smOffset={2}>
          <ComponentWrapperComponent
            label="Hello!"
            onLabelChange={() => {}}
            instructions="hello do a thing"
            onInstructionChange={() => {}}
            headerAside={Aside}
            subLabel="(Goodbye!)"
            {...args}
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
          </ComponentWrapperComponent>
        </Col>
      </Row>
    </StoryItem>

    <StoryItem
      title="ComponentWrapperComponent"
      description=" A sectioned component"
    >
      <Row>
        <Col xs={12} sm={8} smOffset={2}>
          <ComponentWrapperComponent.Header
            label="I'm split up!"
            onLabelChange={() => {}}
            {...args}
          />
          <ComponentWrapperComponent.Body {...args}>
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
          </ComponentWrapperComponent.Body>
          <ComponentWrapperComponent.Footer {...args}>
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
          </ComponentWrapperComponent.Footer>
        </Col>
      </Row>
    </StoryItem>

    <StoryItem title="ComponentWrapperComponent" description="Statuses">
      <Row>
        <Col xs={12} sm={8} smOffset={2}>
          <ComponentWrapperComponent.Header
            label="I'm split up!"
            onLabelChange={() => {}}
            {...args}
          />
          <ComponentWrapperComponent.Body {...args}>
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
          </ComponentWrapperComponent.Body>
          <ComponentWrapperComponent.Footer {...args}>
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
          </ComponentWrapperComponent.Footer>
        </Col>
      </Row>
    </StoryItem>
  </>
);
