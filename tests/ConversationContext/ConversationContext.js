import { React, mount } from '../setup';
import ConversationContext from '../../lib/ConversationContext';
import Conversation from '../../lib/Conversation';

describe('UserList', () => {
  let wrapper;

  const mockUser = {
    id: 2,
    name: 'Bruce',
    avatar:
      'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg',
    initials: 'BB',
    display: 'brucebanner'
  };

  const mockComments = [
    {
      id: 'comment-id-1',
      body:
        'Here is a decent size comment that was created by someone who wanted to comment.',
      createdAt: '2017-06-08 09:56:41',
      author: mockUser,
      createdBy: 2
    },
    {
      id: 'comment-id-2',
      body: 'Comment body and a link to http://google.com and a @mention',
      createdAt: 'Less than a minute ago',
      author: {
        avatar:
          'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/26263_nH1Vuciy3psgQEUCVXZPTVU2RzUyMJ2arUIH7le8U4RrJ9LjFrtvEmyzf2XFgnZ7.png',
        name: 'Ricardo',
        initials: 'RB'
      },
      createdBy: 2
    }
  ];

  beforeEach(() => {
    wrapper = mount(
      <ConversationContext
        label="nice label"
        id="123"
        resolved
        comments={mockComments}
      >
        <span className="waffles">Waffles</span>
      </ConversationContext>
    );
  });

  test('should render a label', () => {
    expect(wrapper.find('.conversation-context__label')).toHaveLength(1);
    expect(wrapper.find('.conversation-context__label').text()).toEqual(
      'nice label'
    );
  });

  test('should render its children', () => {
    expect(wrapper.find('.waffles')).toHaveLength(1);
  });

  test('should render a Conversation', () => {
    expect(wrapper.find(Conversation)).toHaveLength(1);
    expect(wrapper.find(Conversation).prop('id')).toEqual(wrapper.prop('id'));
    expect(wrapper.find(Conversation).prop('resolved')).toEqual(
      wrapper.prop('resolved')
    );
    expect(wrapper.find(Conversation).prop('comments')).toEqual(
      wrapper.prop('comments')
    );
    expect(wrapper.find(Conversation).prop('userCanComment')).toEqual(false);
    expect(wrapper.find(Conversation).prop('user')).toEqual({ id: null });
    expect(wrapper.find(Conversation).prop('showComments')).toEqual(true);
  });
});
