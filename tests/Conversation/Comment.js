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
    comment: {
      id: '123',
      body: 'comment body text',
      createdAt: 'today',
      person: {
        name: 'Bruce',
        avatar: 'url/to/image',
      }
    },
    conversationId: '123',
    actions: {
      editComment: editCommentSpy,
      removeComment: removeCommentSpy,
    },
    userCanEdit: true,
  };

  beforeEach(() => {
    wrapper = shallow(
      <Comment {...props} />,
    );
  });

  it('renders a person component', () => {
    expect(wrapper.find(Person)).to.have.length(1);
  });

  it('renders the comment body text', () => {
    expect(wrapper.find('.conversation__text').text()).to.equal(props.comment.body);
  });

  it('renders the comment created at text', () => {
    expect(wrapper.find('.conversation__date-text').text()).to.equal(props.comment.createdAt)
  });

  it('does not render the edit controls', () => {
    wrapper.setProps({ userCanEdit: false });
    expect(wrapper.find('.conversation__actions')).to.have.length(0);
  });

  it('renders the edit comment controls', () => {
    const actions = wrapper.find('.conversation__actions');
    expect(actions.find(Button)).to.have.length(2);
    expect(actions.find(Button).first().prop('clickHandler')).to.deep.equal(wrapper.instance().showEditForm);
    expect(actions.find(Button).last().prop('clickHandler')).to.deep.equal(wrapper.instance().removeComment);
  });

  it('renders the edit comment form (with correct props)', () => {
    wrapper.setState({ showEditForm: true });
    const commentForm = wrapper.find(CommentForm);
    expect(commentForm).to.have.length(1);
    expect(commentForm.prop('onSubmit')).to.deep.equal(wrapper.instance().editComment);
    expect(commentForm.prop('onCancel')).to.deep.equal(wrapper.instance().hideEditForm);
    expect(commentForm.prop('useTextArea')).to.equal(true);
    expect(commentForm.prop('user')).to.equal(props.comment.person);
    expect(commentForm.prop('value')).to.equal(props.comment.body);
  });

  it('calls the edit comment action', () => {
    const editComment = wrapper.instance().editComment;
    editComment('test');
    expect(editCommentSpy).to.be.called.once;
    expect(editCommentSpy.getCall(0).args[0]).to.equal('test');
    expect(editCommentSpy.getCall(0).args[1]).to.equal(props.comment.id);
  });

  it('calls the remove comment actions', () => {
    const removeComment = wrapper.instance().removeComment;
    removeComment();
    expect(removeCommentSpy).to.be.called.once;
    expect(removeCommentSpy.getCall(0).args[0]).to.equal(props.comment.id);
    expect(removeCommentSpy.getCall(0).args[1]).to.equal(props.conversationId);
  });

  it('toggles the edit form visibility', () => {
    expect(wrapper.state('showEditForm')).to.equal(false);
    wrapper.instance().showEditForm();
    expect(wrapper.state('showEditForm')).to.equal(true);
  });
});
