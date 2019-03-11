import Linkify from "linkifyjs/react";
import { React, mount } from "../setup";
import Comment from "../../lib/Conversation/Comment";
import CommentForm from "../../lib/Conversation/CommentForm";
import Person from "../../lib/Person";
import Button from "../../lib/Button";
import ConfirmationOverlay from "../../lib/ConfirmationOverlay";

describe("Comment", () => {
  let wrapper;
  const onCommentCancelSpy = jest.fn();
  const editCommentSpy = jest.fn();
  const removeCommentSpy = jest.fn();
  const retryCommentSpy = jest.fn();
  const mockUsers = [
    {
      id: 2,
      name: "Bruce",
      avatar:
        "https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg",
      initials: "BB",
      display: "brucebanner"
    },
    {
      id: 5,
      name: "Lynda",
      initials: "LC",
      display: "lyndacarter"
    }
  ];

  const props = {
    id: "123",
    body: "comment body text",
    createdAt: "today",
    createdBy: 2,
    author: {
      name: "Bruce",
      avatar: "url/to/image"
    },
    user: { id: 2 },
    conversationId: "123",
    editComment: editCommentSpy,
    removeComment: removeCommentSpy,
    onCommentChange() {},
    onCommentCancel: onCommentCancelSpy,
    onRowCountChange() {},
    focusFallback: document.createElement("input"),
    users: mockUsers,
    userCanComment: true,
    retryComment: retryCommentSpy
  };

  beforeEach(() => {
    wrapper = mount(<Comment {...props} />);
  });

  afterEach(() => {
    editCommentSpy.mockReset();
    removeCommentSpy.mockReset();
  });

  test("renders a person component", () => {
    expect(wrapper.find(Person)).toHaveLength(1);
    expect(wrapper.find(Person).prop("person")).toEqual(props.author);
  });

  test("renders the comment body text and passes it through the Linkify component", () => {
    expect(wrapper.find(Linkify).prop("children")).toEqual([props.body]);
  });

  test("renders the comment body with mentions highlighted if there is a matching user", () => {
    expect(wrapper.find("span.mention")).toHaveLength(0);
    wrapper.setProps({ body: "hey whats up @waffle" });
    expect(wrapper.find("span.mention")).toHaveLength(0);
    wrapper.setProps({ body: "hey whats up @waffle @lyndacarter" });
    expect(wrapper.find("span.mention").text()).toEqual("@lyndacarter");
    expect(wrapper.find("span.mention").prop("title")).toEqual("Lynda");
  });

  test("renders the comment created at text", () => {
    expect(wrapper.find(".conversation__date-text").text()).toEqual(
      props.createdAt
    );
    wrapper.instance().showEditForm();
    wrapper.update();
    expect(wrapper.find(".conversation__date-text").hostNodes()).toHaveLength(
      0
    );
  });

  test("does not render the edit controls", () => {
    wrapper.setProps({ user: { id: 1 } });
    expect(wrapper.find(".conversation__actions")).toHaveLength(0);
  });

  test("renders the edit comment controls (when a user can edit)", () => {
    const actions = wrapper.find(".conversation__actions");
    expect(actions.find(Button)).toHaveLength(2);
    expect(
      actions
        .find(Button)
        .first()
        .prop("clickHandler")
    ).toEqual(wrapper.instance().showEditForm);
    actions
      .find(Button)
      .last()
      .prop("clickHandler")();
    expect(wrapper.state("confirmRemoval")).toEqual(true);
  });

  test("doesnt render the edit comment controls (when a user cant edit)", () => {
    wrapper.setProps({ userCanComment: false });
    const actions = wrapper.find(".conversation__actions");
    expect(actions.find(Button)).toHaveLength(0);
  });

  test("renders the edit comment form (with correct props)", () => {
    wrapper.instance().showEditForm();
    wrapper.update();
    const commentForm = wrapper.find(CommentForm);
    expect(commentForm).toHaveLength(1);
    expect(commentForm.prop("onSubmit")).toEqual(
      wrapper.instance().editComment
    );
    expect(commentForm.prop("onCancel")).toEqual(
      wrapper.instance().hideEditForm
    );
    expect(commentForm.prop("author")).toBe(props.author);
    expect(commentForm.prop("showAuthor")).toBe(false);
    expect(commentForm.prop("value")).toBe(props.body);
    expect(commentForm.prop("focusOnMount")).toBe(true);
    expect(commentForm.prop("editing")).toBe(true);
    expect(commentForm.prop("onCommentChange")).toEqual(props.onCommentChange);
    expect(commentForm.prop("onRowCountChange")).toEqual(
      props.onRowCountChange
    );
    expect(commentForm.prop("id")).toBe(props.id);
  });

  test("calls the edit comment action", () => {
    wrapper.instance().showEditForm();
    const { editComment } = wrapper.instance();
    editComment("test");
    expect(editCommentSpy).toHaveBeenCalledTimes(1);
    expect(editCommentSpy.mock.calls[0][0]).toEqual(props.id);
    expect(editCommentSpy.mock.calls[0][1]).toEqual("test");
    expect(wrapper.state("showEditForm")).toBe(false);
  });

  test("calls the remove comment actions", () => {
    wrapper.instance().showEditForm();
    wrapper.instance().removeComment(true);
    expect(removeCommentSpy).toHaveBeenCalledTimes(1);
    expect(removeCommentSpy.mock.calls[0][0]).toEqual(props.id);
    expect(removeCommentSpy.mock.calls[0][1]).toEqual(props.conversationId);
    expect(wrapper.state("showEditForm")).toBe(false);
  });

  test("shows the edit form", () => {
    wrapper.instance().showEditForm();
    expect(wrapper.state("showEditForm")).toBe(true);
  });

  test("hides the edit form", () => {
    wrapper.instance().showEditForm();
    wrapper.instance().hideEditForm();
    expect(wrapper.state("showEditForm")).toBe(false);
    expect(onCommentCancelSpy).toBeCalled();
  });

  test("renders the removal confirmation", () => {
    expect(wrapper.find(ConfirmationOverlay).prop("cancel")).toEqual(
      wrapper.instance().toggleRemovalConfirmation
    );
    wrapper.find(ConfirmationOverlay).prop("confirm")();
    expect(removeCommentSpy).toHaveBeenCalledTimes(1);
  });

  test("renders the form or content based on edit state", () => {
    expect(wrapper.find(Linkify)).toHaveLength(1);
    expect(wrapper.find(CommentForm)).toHaveLength(0);

    wrapper.setState({ showEditForm: true });
    expect(wrapper.find(Linkify)).toHaveLength(0);
    expect(wrapper.find(CommentForm)).toHaveLength(1);
  });

  test("renders a failed state", () => {
    wrapper.setProps({ hasFailed: true });
    const failed = wrapper.find(".conversation__failed-text");
    expect(failed).toHaveLength(1);
    expect(failed.find(Button)).toHaveLength(1);
    expect(failed.find(Button).prop("clickHandler")).toEqual(
      wrapper.instance().retryComment
    );
  });

  test("retryComment passes the comment id and body", () => {
    wrapper.instance().retryComment();
    expect(retryCommentSpy).toHaveBeenCalledWith("123", "comment body text");
  });
});
