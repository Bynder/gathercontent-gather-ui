import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatusIndicator, AvatarGroup, AvatarWithPopover, Collections, ParticipantInfo } from "../../lib";
import StoryItem from '../styleguide/StoryItem';
import Icon from "../../lib/Icon";

storiesOf('Components', module).add('Collections', () => (
  <div>
    <StoryItem
      title="Collections"
      description="A wrapper around tables to provide enhanced styling."
    >
      <Collections>
        <table>
          <thead>
            <tr>
              <th>Head 1</th>
              <th>Head 2</th>
              <th>Head 3</th>
              <th>Head 4</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <StatusIndicator
                  color="rgb(250, 167, 50)"
                  label="Item name"
                  small
                />
              </td>
              <td>Cell 2</td>
              <td>Cell 3</td>
              <td>Cell 4</td>
            </tr>
            <tr>
              <td>
                <StatusIndicator
                  color="rgb(250, 167, 50)"
                  label="Item name"
                  small
                />
              </td>
              <td>Cell 2</td>
              <td>
                <AvatarGroup maximum={3}>
                  <AvatarWithPopover
                    name="Angus Edwardson"
                    initials="AE"
                    email="example@gmail.com"
                    bordered
                  >
                    <ParticipantInfo
                      name="Angus Edwardson"
                      email="example@gmail.com"
                    />
                  </AvatarWithPopover>
                  <AvatarWithPopover
                    name="Kyle Harper"
                    initials="KH"
                    email="example@gmail.com"
                    bordered
                  >
                    <ParticipantInfo
                      name="Kyle Harper"
                      email="example@gmail.com"
                    />
                  </AvatarWithPopover>
                </AvatarGroup>
              </td>
              <td>
                <Icon name="comment" /> 2
              </td>
            </tr>
          </tbody>
        </table>
      </Collections>
    </StoryItem>
  </div>
));
