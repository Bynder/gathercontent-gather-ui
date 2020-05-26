import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Comment, Conversation } from 'lib';
import { Sidebar } from '../../lib/Sidebar/Sidebar';
import {
  mockComments,
  mockUsers
} from '../../lib/Conversation/stories/mockData';

storiesOf('Components', module).add('Sidebar', () => {
  const isOpen = boolean('isOpen', false);

  const label = 'Direction';
  const options = {
    right: 'right',
    left: 'left'
  };
  const defaultValue = 'right';

  const direction = select(label, options, defaultValue);

  const width = text('width', '25%');

  return (
    <div className="w-full h-screen bg-white border-l border-solid border-neutral-90 border-r border-b border-t relative overflow-hidden">
      <Sidebar
        isOpen={isOpen}
        direction={direction}
        width={width}
        className="p-2"
      >
        <Conversation className="border-l border-solid border-neutral-90 border-r border-b border-t mb-2">
          <Conversation.Body>
            <Comment className="pt-2">
              <Comment.Body
                isEditing={false}
                comment={mockComments[0]}
                users={mockUsers}
              />
            </Comment>
          </Conversation.Body>
        </Conversation>

        <Conversation className="border-l border-solid border-neutral-90 border-r border-b border-t mb-2">
          <Conversation.Body>
            <Comment className="pt-2">
              <Comment.Body
                isEditing={false}
                comment={mockComments[0]}
                users={mockUsers}
              />
            </Comment>
          </Conversation.Body>
        </Conversation>

        <Conversation className="border-l border-solid border-neutral-90 border-r border-b border-t mb-2">
          <Conversation.Body>
            <Comment className="pt-2">
              <Comment.Body
                isEditing={false}
                comment={mockComments[0]}
                users={mockUsers}
              />
            </Comment>
          </Conversation.Body>
        </Conversation>

        <Conversation className="border-l border-solid border-neutral-90 border-r border-b border-t mb-2">
          <Conversation.Body>
            <Comment className="pt-2">
              <Comment.Body
                isEditing={false}
                comment={mockComments[0]}
                users={mockUsers}
              />
            </Comment>
          </Conversation.Body>
        </Conversation>

        <Conversation className="border-l border-solid border-neutral-90 border-r border-b border-t mb-2">
          <Conversation.Body>
            <Comment className="pt-2">
              <Comment.Body
                isEditing={false}
                comment={mockComments[0]}
                users={mockUsers}
              />
            </Comment>
          </Conversation.Body>
        </Conversation>
      </Sidebar>
    </div>
  );
});
