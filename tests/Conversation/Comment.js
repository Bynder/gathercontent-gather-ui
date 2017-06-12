import { React, expect, sinon, shallow } from '../setup';
import Comment from '../../lib/Conversation/Comment';
import CommentForm from '../../lib/Conversation/CommentForm';
import Person from '../../lib/Person';
import Button from '../../lib/Button';

describe('Comment', () => {
  let wrapper;
  let editCommentSpy = sinon.spy();
  let removeCommentSpy = sinon.spy();

  const props = {
    id: '123',
    body: 'comment body text',
    createdAt: 'today',
    createdBy: 2,
    author: {
      name: 'Bruce',
      avatar: 'url/to/image',
    },
    user: { id: 2 },
    conversationId: '123',
    actions: {
      editComment: editCommentSpy,
      removeComment: removeCommentSpy,
    },
    focusFallback: document.createElement('input'),
  };

  beforeEach(() => {
    wrapper = shallow(
      <Comment {...props} />,
    );
  });

  it('renders a person component', () => {
    expect(wrapper.find(Person)).to.have.length(1);
    expect(wrapper.find(Person).prop('person')).to.deep.equal(props.author);
  });

  it('renders the comment body text', () => {
    expect(wrapper.find('.conversation__text').text()).to.equal(props.body);
  });

  it('renders the comment created at text', () => {
    expect(wrapper.find('.conversation__date-text').text()).to.equal(props.createdAt)
  });

  it('does not render the edit controls', () => {
    wrapper.setProps({ user: { id: 1 } });
    expect(wrapper.find('.conversation__actions')).to.have.length(0);
  });

  it('renders the edit comment controls (when a user can edit)', () => {
    const actions = wrapper.find('.conversation__actions');
    expect(actions.find(Button)).to.have.length(2);
    expect(actions.find(Button).first().prop('clickHandler')).to.deep.equal(wrapper.instance().showEditForm);
    expect(actions.find(Button).last().prop('clickHandler')).to.deep.equal(wrapper.instance().removeComment);
  });

  it('renders the edit comment form (with correct props)', () => {
    wrapper.instance().showEditForm();
    const commentForm = wrapper.find(CommentForm);
    expect(commentForm).to.have.length(1);
    expect(commentForm.prop('onSubmit')).to.deep.equal(wrapper.instance().editComment);
    expect(commentForm.prop('onCancel')).to.deep.equal(wrapper.instance().hideEditForm);
    expect(commentForm.prop('author')).to.equal(props.author);
    expect(commentForm.prop('value')).to.equal(props.body);
    expect(commentForm.prop('focusOnMount')).to.equal(true);
  });

  it('calls the edit comment action', () => {
    wrapper.instance().showEditForm();
    const editComment = wrapper.instance().editComment;
    editComment('test');
    expect(editCommentSpy).to.be.called.once;
    expect(editCommentSpy.getCall(0).args[0]).to.equal(props.id);
    expect(editCommentSpy.getCall(0).args[1]).to.equal('test');
    expect(wrapper.state('showEditForm')).to.equal(false);
  });

  it('calls the remove comment actions', () => {
    wrapper.instance().showEditForm();
    const removeComment = wrapper.instance().removeComment;
    removeComment();
    expect(removeCommentSpy).to.be.called.once;
    expect(removeCommentSpy.getCall(0).args[0]).to.equal(props.id);
    expect(removeCommentSpy.getCall(0).args[1]).to.equal(props.conversationId);
    expect(wrapper.state('showEditForm')).to.equal(false);
  });

  it('shows the edit form', () => {
    wrapper.instance().showEditForm();
    expect(wrapper.state('showEditForm')).to.equal(true);
  });

  it('hides the edit form', () => {
    wrapper.instance().showEditForm();
    wrapper.instance().hideEditForm();
    expect(wrapper.state('showEditForm')).to.equal(false);
  });
});
