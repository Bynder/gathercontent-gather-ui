import { React, expect, shallow } from '../setup';
import CommentList from '../../lib/Conversation/CommentList';
import Comment from '../../lib/Conversation/Comment';

describe('Comment List', () => {
  let wrapper;

  const comments = [
    { id: 2, body: 'comment body', createdAt: '', createdBy: 2, author: { name: 'bob' } },
    { id: 3, body: 'comment body', createdAt: '', createdBy: 2, author: { name: 'bob' } },
  ];
  const props = {
    comments,
    conversationId: '123',
  };

  beforeEach(() => {
    wrapper = shallow(
      <CommentList {...props} />,
    );
  });

  it('renders 2 comments (with correct props)', () => {
    const childComments = wrapper.find(Comment);
    expect(childComments).to.have.length(2);
    expect(childComments.first().prop('conversationId')).to.equal(props.conversationId);
    expect(childComments.first().prop('comments')).to.not.deep.equal(props.comments);
    expect(childComments.first().prop('id')).to.equal(2);
  });
});
