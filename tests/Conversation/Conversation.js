import { React, expect, sinon, shallow } from '../setup';
import Conversation from '../../lib/Conversation';
import CommentList from '../../lib/Conversation/CommentList';
import CommentForm from '../../lib/Conversation/CommentForm';
import Button from '../../lib/Button';
import BoundaryClickWatcher from '../../lib/BoundaryClickWatcher';

describe('Conversation', () => {
  let wrapper;
  let sandbox = sinon.sandbox.create();
  let resolveConversationSpy;
  let addCommentSpy;

  const props = {
    id: '123',
    user: { name: 'kyle', id: '123' },
    comments: [
      { person: { name: 'Toyah' }, id: 123 },
      { person: { name: 'Sapphire' }, id: 321 },
    ],
  };

  beforeEach(() => {
    resolveConversationSpy = sandbox.spy();
    addCommentSpy = sandbox.spy();
    wrapper = shallow(
      <Conversation
        {...props}
        userCanComment
        actions={{
          resolveConversation: resolveConversationSpy,
          addComment: addCommentSpy,
        }}
      />,
    );
  });

  beforeEach(() => {
    sandbox.restore();
  });

  it('pluralises the reply count text ', () => {
    expect(wrapper.find(Button).last().children().text()).to.equal('View 1 reply');

    wrapper.setProps({
      comments: [
        ...props.comments,
        { person: { name: 'Corinne' }, id: 567 },
      ]
    });
    expect(wrapper.find(Button).last().children().text()).to.equal('View 2 replies');
  });

  it('does not render the reply count text', () => {
    wrapper.setState({ isActive: true });
    expect(wrapper.find('.conversation__reply-count')).to.have.length(0);
  });

  it('adds a BEM modifier of is-active', () => {
    wrapper.setState({ isActive: true });
    expect(wrapper.find('.conversation').hasClass('conversation--is-active')).to.be.true;

    wrapper.setState({ isActive: false });
    expect(wrapper.find('.conversation').hasClass('conversation--is-active')).to.be.false;

    wrapper.setProps({ isActive: true });
    expect(wrapper.find('.conversation').hasClass('conversation--is-active')).to.be.true;
  });

  it('uses a BoundaryClickWatcher component (with the correct props)', () => {
    const boundaryWatcher = wrapper.find(BoundaryClickWatcher);
    expect(boundaryWatcher).to.have.length(1);
    expect(boundaryWatcher.prop('outsideClickHandler')).to.equal(wrapper.instance().deactivateConversation);
    expect(boundaryWatcher.prop('initialClickHandler')).to.equal(wrapper.instance().activateConversation);
  });

  it('renders a list of comments (with correct props)', () => {
    const commentList = wrapper.find(CommentList);
    expect(commentList).to.have.length(1);
    expect(commentList.prop('conversationId')).to.equal(props.id);
    expect(commentList.prop('comments')).to.equal(props.comments);
    expect(commentList.prop('actions')).to.deep.equal({
      resolveConversation: resolveConversationSpy,
      addComment: addCommentSpy,
    });
    expect(commentList.prop('userCanComment')).to.equal(true);
    expect(commentList.prop('id')).to.not.equal(props.id);
  });

  it('calls the resolveConversation action', () => {
    const resolveConversation = wrapper.instance().resolveConversation;
    expect(wrapper.find(Button).first().prop('clickHandler')).to.equal(resolveConversation);
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
    expect(commentForm.prop('onSubmit')).to.equal(wrapper.instance().addComment);
  });

  it('does not render a comment form', () => {
    wrapper.setProps({ userCanComment: false });
    expect(wrapper.find(CommentForm)).to.have.length(0);
  });
});
