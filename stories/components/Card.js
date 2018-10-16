import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {Card, FileCard, Icon} from '../../lib';
import StoryItem from '../styleguide/StoryItem';

const card = storiesOf('Components', module)
  .add('Card', () => (
    <div>
      <StoryItem
        title="Basic card"
        description="The primary action button for creation activities"
      >
        <Card>
          <Card.Content>
            hi
          </Card.Content>
          <Card.Footer>
            hi
          </Card.Footer>
        </Card>
      </StoryItem>

      <StoryItem
        title="Image card"
        description="The primary action button for creation activities"
      >
      <Row>
        <Col xs={2}>
          <Card>
            <Card.Content collapse bordered>
              <FileCard
                previewSrc="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
                showPreview
              />
            </Card.Content>
            <Card.Content>
              <Card.SubHeading truncate>
                A sheep in Iceland (not the shop)
              </Card.SubHeading>
              Uploaded a week ago
            </Card.Content>
            <Card.Footer collapse>
              <Card.FooterLeft>
                <Icon name="cog" />
              </Card.FooterLeft>
              <Card.FooterRight>
                info
              </Card.FooterRight>
            </Card.Footer>
          </Card>
          </Col>
          <Col xs={2}>
            <Card>
              <Card.Content collapse>
                <FileCard
                  previewSrc="http://www.sdpsnet.org/sdps/images/conference/2012/hotel/mod_galleries_53.jpeg"
                  showPreview
                />
              </Card.Content>
              <Card.Content bordered>
                hello!
              </Card.Content>
              <Card.Footer>
                hi
              </Card.Footer>
            </Card>
            </Col>
        </Row>
      </StoryItem>
    </div>
  ));

export default card;
