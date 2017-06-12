import { React, expect, shallow } from '../setup';
import CommentList from '../../lib/Conversation/CommentList';
import Comment from '../../lib/Conversation/Comment';

describe('Comment List', () => {
  let wrapper;

  const comments = [{}, {}];
  const props = {
    comments: [{ id: 2 }, {}],
    conversationId: '123',
  };

  beforeEach(() => {
    wrapper = shallow(
      <CommentList {...props} />,
    );
  });

  it('renders 2 comments (with correct props)', () => {
    const comments = wrapper.find(Comment);
    expect(comments).to.have.length(2);
    expect(comments.first().prop('conversationId')).to.equal(props.conversationId);
    expect(comments.first().prop('comments')).to.not.deep.equal(props.comments);
    expect(comments.first().prop('id')).to.equal(2);
  });
});
