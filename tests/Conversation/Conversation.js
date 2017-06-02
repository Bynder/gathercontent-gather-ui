import { React, expect, sinon, shallow } from '../setup';
import Conversation from '../../lib/Conversation';
import CommentList from '../../lib/Conversation/CommentList';
import CommentForm from '../../lib/Conversation/CommentForm';
import Button from '../../lib/Button';

describe('Conversation', () => {
  let wrapper;
  let resolveConversationSpy = sinon.spy();
  let addCommentSpy = sinon.spy();

  const props = {
    id: '123',
    user: { name: 'kyle', id: '123' },
    comments: [
      { person: { name: 'Toyah' }, id: 123 },
      { person: { name: 'Sapphire' }, id: 321 }
    ],
    actions: {
      resolveConversation: resolveConversationSpy,
      addComment: addCommentSpy,
    }
  };

  beforeEach(() => {
    wrapper = shallow(
      <Conversation
        {...props}
        userCanComment
      />,
    );
  });

  beforeEach(() => {
    // resolveConversationSpy.restore();
    // addCommentSpy.restore();
  });

  it('renders a resolve conversation Button', () => {
    expect(wrapper.find(Button)).to.have.length(1);
  });

  it('renders a list of comments (with correct props)', () => {
    const commentList = wrapper.find(CommentList);
    expect(commentList).to.have.length(1);
    expect(commentList.prop('conversationId')).to.equal(props.id);
    expect(commentList.prop('comments')).to.equal(props.comments);
    expect(commentList.prop('actions')).to.equal(props.actions);
    expect(commentList.prop('userCanComment')).to.equal(true);
    expect(commentList.prop('id')).to.not.equal(props.id);
  });

  it('calls the resolveConversation action', () => {
    const resolveConversation = wrapper.instance().resolveConversation;
    expect(wrapper.find(Button).prop('clickHandler')).to.equal(resolveConversation);
    resolveConversation();
    expect(resolveConversationSpy.getCall(0).args[0]).to.equal(props.id);
  });

  it('calls the addComment action', () => {
    const addComment = wrapper.instance().addComment;
    expect(wrapper.find(CommentForm).prop('onSubmit')).to.equal(addComment);
    addComment('test');
    expect(addCommentSpy.getCall(0).args[0]).to.equal('test');
    expect(addCommentSpy.getCall(0).args[1]).to.equal(props.id);
  });

  it('renders a comment form (with correct props)', () => {
    const commentForm = wrapper.find(CommentForm);
    expect(commentForm).to.have.length(1);
    expect(commentForm.prop('user')).to.equal(props.user);
  });

  it('does not render a comment form', () => {
    wrapper.setProps({ userCanComment: false });
    expect(wrapper.find(CommentForm)).to.have.length(0);
  });
});
