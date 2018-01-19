import { React, shallow } from '../setup';
import CommentList from '../../lib/Conversation/CommentList';
import Comment from '../../lib/Conversation/Comment';

describe('Comment List', () => {
  let wrapper;

  const comments = [
    {
      id: 2,
      body: 'comment body',
      createdAt: '',
      createdBy: 2,
      author: { name: 'bob' }
    },
    {
      id: 3,
      body: 'comment body',
      createdAt: '',
      createdBy: 2,
      author: { name: 'bob' }
    }
  ];
  const props = {
    comments,
    conversationId: '123'
  };

  beforeEach(() => {
    wrapper = shallow(<CommentList {...props} />);
  });

  test('renders 2 comments (with correct props)', () => {
    const childComments = wrapper.find(Comment);
    expect(childComments).toHaveLength(2);
    expect(childComments.first().prop('conversationId')).toEqual(
      props.conversationId
    );
    expect(childComments.first().prop('comments')).not.toEqual(props.comments);
    expect(childComments.first().prop('id')).toEqual(2);
  });
});
