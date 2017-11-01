import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../Avatar';
import CommentFormInput from './CommentFormInput';
import CommentFormActions from './CommentFormActions';

class CommentForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    author: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string
    }).isRequired,
    focusOnMount: PropTypes.bool,
    existingConversation: PropTypes.bool.isRequired,
    value: PropTypes.string
  };

  static defaultProps = {
    value: '',
    focusOnMount: false,
    onCancel: () => {},
    author: {
      name: '??',
      avatar: ''
    }
  };

  constructor() {
    super();
    this.state = { inputValue: '', focused: false, submitted: false };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.cancelComment = this.cancelComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '', submitted: true });
  }

  onBlur() {
    this.setState({ focused: false });
  }

  onFocus() {
    this.setState({ focused: true });
  }

  cancelComment() {
    this.props.onCancel();
    this.setState({ inputValue: '' });
  }

  updateInputValue(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    const hasValue = this.state.inputValue || this.props.value ? true : false;
    const hasValueClass = hasValue ? 'has-value' : '';
    return (
      <form
        className={`comment-form ${hasValueClass}`}
        onSubmit={this.onSubmit}
      >
        <div className="comment-form__body">
          <Avatar
            className="comment-form__avatar avatar--supporting"
            src={this.props.author.avatar}
            altText={this.props.author.name}
          />
          <CommentFormInput
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            handleOnChange={this.updateInputValue}
            focusOnMount={this.props.focusOnMount}
            value={this.state.inputValue || this.props.value}
            submitted={this.state.submitted}
          />
        </div>
        {(this.state.focused || hasValue || this.state.submitted) && (
            <CommentFormActions
              onSubmit={this.onSubmit}
              onCancel={this.cancelComment}
              hasValue={hasValue}
              submitted={this.state.submitted}
              existingConversation={this.props.existingConversation}
            />
          )}
      </form>
    );
  }
}

export default CommentForm;
