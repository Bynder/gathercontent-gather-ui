import { React, expect, sinon, shallow } from '../setup';
import Conversation from '../../lib/Conversation';
import CommentList from '../../lib/Conversation/CommentList';
import CommentForm from '../../lib/Conversation/CommentForm';
import Button from '../../lib/Button';

describe('Conversation', () => {
  let wrapper;
  const sandbox = sinon.sandbox.create();
  let resolveConversationSpy;
  let addCommentSpy;

  const props = {
    id: '123',
    user: { name: 'kyle', id: '123' },
    comments: [
      { person: { name: 'Toyah' }, id: 123 },
      { person: { name: 'Sapphire' }, id: 321 }
    ]
  };

  beforeEach(() => {
    resolveConversationSpy = sandbox.spy();
    addCommentSpy = sandbox.spy();
    wrapper = shallow(
      <Conversation
        {...props}
        userCanComment
        resolveConversation={resolveConversationSpy}
        addComment={addCommentSpy}
      />
    );
  });

  beforeEach(() => {
    sandbox.restore();
  });

  it('renders an error notification', () => {
    expect(wrapper.find('Notification')).to.have.length(0);
    wrapper.setProps({ hasError: true });
    expect(wrapper.find('Notification')).to.have.length(1);
  });

  it('renders the resolve conversation Button', () => {
    const resolveButton = wrapper.find(Button).first();
    expect(resolveButton.prop('clickHandler')).to.deep.equal(
      wrapper.instance().resolveConversation
    );
  });

  it('calls the resolveConversation action', () => {
    const resolveConversation = wrapper.instance().resolveConversation;
    expect(
      wrapper
        .find(Button)
        .first()
        .prop('clickHandler')
    ).to.equal(resolveConversation);
    resolveConversation();
    expect(resolveConversationSpy.getCall(0).args[0]).to.equal(props.id);
  });

  it('adds a state class of is-active', () => {
    expect(wrapper.find('.conversation').hasClass('is-active')).to.be.true();

    wrapper.setProps({ showComments: false });
    expect(wrapper.find('.conversation').hasClass('is-active')).to.be.false();

    wrapper.setProps({ showComments: true });
    expect(wrapper.find('.conversation').hasClass('is-active')).to.be.true();
  });

  it('renders a list of comments (with correct props)', () => {
    const commentList = wrapper.find(CommentList);
    expect(commentList).to.have.length(1);
    expect(commentList.prop('conversationId')).to.equal(props.id);
    expect(commentList.prop('comments')).to.equal(props.comments);
    expect(commentList.prop('resolveConversation')).to.equal(
      resolveConversationSpy
    );
    expect(commentList.prop('addComment')).to.equal(addCommentSpy);
    expect(commentList.prop('userCanComment')).to.equal(true);
    expect(commentList.prop('id')).to.not.equal(props.id);
    expect(commentList.prop('focusFallback')).to.deep.equal(
      props.focusFallback
    );
  });

  it('does not render the reply count text', () => {
    expect(wrapper.find('.conversation__reply-count')).to.have.length(0);
  });

  it('does not render the reply count text (when there is only 1 comment)', () => {
    wrapper.setProps({ showComments: false });
    wrapper.setProps({ comments: [props.comments[0]] });
    expect(wrapper.find('.conversation__reply-count')).to.have.length(0);
  });

  it('does render the reply count text', () => {
    wrapper.setProps({ showComments: false });
    expect(wrapper.find('.conversation__reply-count')).to.have.length(1);
  });

  it('pluralises the reply count text ', () => {
    wrapper.setProps({ showComments: false });
    expect(
      wrapper
        .find(Button)
        .last()
        .children()
        .text()
    ).to.equal('View 1 reply');

    wrapper.setProps({
      comments: [...props.comments, { person: { name: 'Corinne' }, id: 567 }]
    });
    expect(
      wrapper
        .find(Button)
        .last()
        .children()
        .text()
    ).to.equal('View 2 replies');
  });

  it('calls the addComment action', () => {
    const addComment = wrapper.instance().addComment;
    expect(wrapper.find(CommentForm).prop('onSubmit')).to.equal(addComment);
    addComment('test');
    expect(addCommentSpy.getCall(0).args[0]).to.equal('test');
  });

  it('renders a comment form (with correct props)', () => {
    let commentForm = wrapper.find(CommentForm);
    expect(commentForm).to.have.length(1);
    expect(commentForm.prop('existingConversation')).to.equal(true);
    expect(commentForm.prop('author')).to.equal(props.user);
    expect(commentForm.prop('onSubmit')).to.equal(
      wrapper.instance().addComment
    );
    wrapper.setProps({ comments: [], resolveConversation: () => {} });
    commentForm = wrapper.find(CommentForm);
    expect(commentForm.prop('existingConversation')).to.equal(false);
  });

  it('does not render a comment form', () => {
    wrapper.setProps({ userCanComment: false });
    expect(wrapper.find(CommentForm)).to.have.length(0);
  });

  it('does not render a resolveConversation button or a CommentList', () => {
    wrapper.setProps({ comments: [] });
    expect(wrapper.find('.conversation__resolve')).to.have.length(0);
    expect(wrapper.find(CommentList)).to.have.length(0);
  });
});
