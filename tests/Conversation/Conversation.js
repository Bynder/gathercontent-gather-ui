import { React, shallow } from '../setup';
import Conversation from '../../lib/Conversation';
import CommentList from '../../lib/Conversation/CommentList';
import CommentForm from '../../lib/Conversation/CommentForm';
import Button from '../../lib/Button';

describe('Conversation', () => {
  let wrapper;
  let resolveConversationSpy;
  let addCommentSpy;

  const props = {
    id: '123',
    user: { name: 'kyle', id: '123' },
    comments: [
      { person: { name: 'Toyah' }, id: 123 },
      { person: { name: 'Sapphire' }, id: 321 }
    ],
    onCommentChange() {},
    onRowCountChange() {}
  };

  beforeEach(() => {
    resolveConversationSpy = jest.fn();
    addCommentSpy = jest.fn();
    wrapper = shallow(
      <Conversation
        {...props}
        userCanComment
        resolveConversation={resolveConversationSpy}
        addComment={addCommentSpy}
      />
    );
  });

  test('renders an error notification', () => {
    expect(wrapper.find('Notification')).toHaveLength(0);
    wrapper.setProps({ hasError: true });
    expect(wrapper.find('Notification')).toHaveLength(1);
  });

  test('renders the resolve conversation Button', () => {
    const resolveButton = wrapper.find(Button).first();
    expect(resolveButton.prop('clickHandler')).toEqual(
      wrapper.instance().resolveConversation
    );
  });

  test('calls the resolveConversation action', () => {
    const resolveConversation = wrapper.instance().resolveConversation;
    expect(
      wrapper
        .find(Button)
        .first()
        .prop('clickHandler')
    ).toEqual(resolveConversation);
    resolveConversation();
    expect(resolveConversationSpy.mock.calls[0][0]).toEqual(props.id);
  });

  test('adds a state class of is-active', () => {
    expect(wrapper.find('.conversation').hasClass('is-active')).toBe(true);

    wrapper.setProps({ showComments: false });
    expect(wrapper.find('.conversation').hasClass('is-active')).toEqual(false);

    wrapper.setProps({ showComments: true });
    expect(wrapper.find('.conversation').hasClass('is-active')).toBe(true);
  });

  test('renders a list of comments (with correct props)', () => {
    const commentList = wrapper.find(CommentList);
    expect(commentList).toHaveLength(1);
    expect(commentList.prop('conversationId')).toEqual(props.id);
    expect(commentList.prop('comments')).toEqual(props.comments);
    expect(commentList.prop('resolveConversation')).toEqual(
      resolveConversationSpy
    );
    expect(commentList.prop('addComment')).toEqual(addCommentSpy);
    expect(commentList.prop('userCanComment')).toEqual(true);
    expect(commentList.prop('id')).not.toBe(props.id);
    expect(commentList.prop('focusFallback')).toEqual(props.focusFallback);
    expect(commentList.prop('onCommentChange')).toEqual(props.onCommentChange);
    expect(commentList.prop('onRowCountChange')).toEqual(props.onRowCountChange);
  });

  test('does not render the reply count text', () => {
    expect(wrapper.find('.conversation__reply-count')).toHaveLength(0);
  });

  test('does not render the reply count text (when there is only 1 comment)', () => {
    wrapper.setProps({ showComments: false });
    wrapper.setProps({ comments: [props.comments[0]] });
    expect(wrapper.find('.conversation__reply-count')).toHaveLength(0);
  });

  test('does render the reply count text', () => {
    wrapper.setProps({ showComments: false });
    expect(wrapper.find('.conversation__reply-count')).toHaveLength(1);
  });

  test('pluralises the reply count text ', () => {
    wrapper.setProps({ showComments: false });
    expect(
      wrapper
        .find(Button)
        .last()
        .children()
        .text()
    ).toEqual('View 1 reply');

    wrapper.setProps({
      comments: [...props.comments, { person: { name: 'Corinne' }, id: 567 }]
    });
    expect(
      wrapper
        .find(Button)
        .last()
        .children()
        .text()
    ).toEqual('View 2 replies');
  });

  test('calls the addComment action', () => {
    const addComment = wrapper.instance().addComment;
    expect(wrapper.find(CommentForm).prop('onSubmit')).toEqual(addComment);
    expect(wrapper.find(CommentForm).prop('id')).toEqual('123');
    expect(wrapper.find(CommentForm).prop('onCommentChange')).toEqual(
      props.onCommentChange
    );
    addComment('test');
    expect(addCommentSpy.mock.calls[0][0]).toEqual('test');
  });

  test('renders a comment form (with correct props)', () => {
    const commentForm = wrapper.find(CommentForm);
    expect(commentForm).toHaveLength(1);
    expect(commentForm.prop('author')).toEqual(props.user);
    expect(commentForm.prop('onSubmit')).toEqual(wrapper.instance().addComment);
  });

  test('does not render a comment form', () => {
    wrapper.setProps({ userCanComment: false });
    expect(wrapper.find(CommentForm)).toHaveLength(0);
  });

  test('does not render a resolveConversation button or a CommentList', () => {
    wrapper.setProps({ comments: [] });
    expect(wrapper.find('.conversation__resolve')).toHaveLength(0);
    expect(wrapper.find(CommentList)).toHaveLength(0);
  });
});
