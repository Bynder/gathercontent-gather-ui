import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import pluralize from "pluralize";
import cx from "classnames";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import Button from "../Button";
import Notification from "../Notification";
import ResolveIcon from "../../assets/icons/resolve.svg";

class Conversation extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    resolveConversation: PropTypes.func,
    onCancel: PropTypes.func,
    addComment: PropTypes.func.isRequired,
    editComment: PropTypes.func,
    removeComment: PropTypes.func,
    onCommentChange: PropTypes.func,
    onCommentCancel: PropTypes.func,
    onRowCountChange: PropTypes.func,
    user: PropTypes.shape().isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape()),
    placeholder: PropTypes.string,
    userCanComment: PropTypes.bool,
    userCanResolve: PropTypes.bool,
    showComments: PropTypes.bool,
    focusOnMount: PropTypes.bool,
    hasError: PropTypes.bool,
    className: PropTypes.string,
    users: PropTypes.arrayOf(PropTypes.shape()),
    resolved: PropTypes.bool,
    retryComment: PropTypes.func
  };

  static defaultProps = {
    userCanComment: false,
    userCanResolve: false,
    showComments: true,
    focusOnMount: true,
    hasError: false,
    onCancel() {},
    editComment() {},
    removeComment() {},
    resolveConversation() {},
    onCommentChange() {},
    onCommentCancel() {},
    onRowCountChange() {},
    retryComment() {},
    comments: [],
    placeholder: "Reply...",
    className: "",
    users: [],
    resolved: false
  };

  state = {
    showComments: false
  };

  resolveConversation = () => this.props.resolveConversation(this.props.id);

  addComment = commentBody => this.props.addComment(commentBody);

  render() {
    const showComments = this.state.showComments || this.props.showComments;
    const additionalClasses = cx(this.props.className, {
      "is-active": showComments,
      "is-read-only": !this.props.userCanComment && !this.props.userCanResolve,
      "show-reply-preview": !showComments && this.props.comments.length > 1
    });
    const { id, comments, ...rest } = this.props;

    return (
      <div
        className={`conversation ${additionalClasses}`}
        data-conversation-component={id}
      >
        {this.props.hasError && (
          <Notification level="danger">
            There was a problem submitting your comment. Please try again
          </Notification>
        )}
        {this.props.resolveConversation && comments.length > 0 && (
          <Fragment>
            <div className="conversation__resolve">
              {this.props.resolved && (
                <span>
                  <ResolveIcon /> Resolved
                </span>
              )}
              {!this.props.resolved && this.props.userCanResolve && (
                <Button
                  types={["link-default"]}
                  clickHandler={this.resolveConversation}
                >
                  <ResolveIcon />
                  Resolve Conversation
                </Button>
              )}
            </div>

            <CommentList
              {...rest}
              conversationId={id}
              comments={comments}
              onCommentChange={this.props.onCommentChange}
              onCommentCancel={this.props.onCommentCancel}
              userCanComment={this.props.userCanComment}
              retryComment={this.props.retryComment}
            />
          </Fragment>
        )}

        {comments.length > 2 && (
          <div className="conversation__reply-count">
            <Button types={["size-sm", "link-default"]} clickHandler={() => {}}>
              {`${comments.length - 2} more ${pluralize(
                "reply",
                comments.length - 2
              )}`}
            </Button>
          </div>
        )}

        {comments.length > 1 && !showComments && (
          <div className="conversation__latest-reply">
            <CommentList
              {...rest}
              conversationId={id}
              comments={[comments[comments.length - 1]]}
              onCommentChange={this.props.onCommentChange}
              onCommentCancel={this.props.onCommentCancel}
              userCanComment={this.props.userCanComment}
              retryComment={this.props.retryComment}
            />
          </div>
        )}

        {this.props.userCanComment && (
          <div className="conversation__foot">
            <CommentForm
              id={this.props.id}
              onSubmit={this.addComment}
              author={this.props.user}
              onCancel={this.props.onCancel}
              onCommentChange={this.props.onCommentChange}
              focusOnMount={this.props.focusOnMount}
              placeholder={this.props.placeholder}
              onRowCountChange={this.props.onRowCountChange}
              users={this.props.users}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Conversation;
