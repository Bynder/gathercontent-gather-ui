import React from 'react';
import { storiesOf } from '@storybook/react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ColField from '..';
import StoryItem from '../../../stories/styleguide/StoryItem';
import TextPreviewSVG from '../../../assets/text-preview.svg';

storiesOf('Components', module).add('ColField', () => {
  return (
    <StoryItem title="ColField" description="stuff">
      <Row>
        <Col xs={12} sm={8} smOffset={2}>
          <ColField>
            <ColField.Header>
              <ColField.Label editable onChange={() => {}}>
                Howdy
              </ColField.Label>
            </ColField.Header>
            <ColField.Body>
              <div className="py-5 px-6 text-center">
                <TextPreviewSVG />
              </div>
            </ColField.Body>
            <ColField.Footer>
              <ColField.Instructions editable onChange={() => {}}>
                Lots of instructions here how fun blabla.
              </ColField.Instructions>
            </ColField.Footer>
          </ColField>
        </Col>
      </Row>
    </StoryItem>
  );
});
