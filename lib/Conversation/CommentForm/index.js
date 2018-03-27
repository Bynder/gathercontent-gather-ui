import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Avatar from '../../Avatar';
import ExpandingTextArea from '../../ExpandingTextArea';
import CommentFormActions from './CommentFormActions';
import ShortcutTrigger from '../../ShortcutTrigger/index';

class CommentForm extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCommentChange: PropTypes.func.isRequired,
    onRowCountChange: PropTypes.func,
    onCancel: PropTypes.func,
    author: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      initials: PropTypes.string
    }).isRequired,
    focusOnMount: PropTypes.bool,
    value: PropTypes.string,
    isSubmitting: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    editing: PropTypes.bool,
    showAuthor: PropTypes.bool
  };

  static defaultProps = {
    value: '',
    focusOnMount: false,
    onCancel: () => {},
    onRowCountChange: () => {},
    author: {
      name: '??',
      avatar: '',
      initials: ''
    },
    editing: false,
    showAuthor: true
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value,
      inputHasFocused: false
    };
  }

  componentDidMount() {
    if (this.state.inputValue) {
      this.props.onCommentChange(this.props.id, this.state.inputValue);
    }
  }

  onSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.props.onSubmit(this.state.inputValue);
    const inputValue = !this.props.isSubmitting ? '' : this.state.inputValue;
    this.setState({ inputValue });
  }

  toggleInputHasFocus = () => {
    this.setState({ inputHasFocused: !this.state.inputHasFocused });
  }

  cancelComment = () => {
    this.props.onCancel();
    this.setState({ inputValue: '' });
  }

  updateInputValue = (e) => {
    this.props.onCommentChange(this.props.id, e.target.value);
    this.setState({ inputValue: e.target.value });
  }

  render() {
    const hasValue = !!this.state.inputValue || !!this.props.value;
    const additionalClasses = cx({
      'has-value': hasValue,
      'is-submitting': this.props.isSubmitting,
      'comment-form--inline': this.props.editing
    });
    return (
      <form
        className={`comment-form ${additionalClasses}`}
        onSubmit={this.onSubmit}
      >
        <div className="comment-form__body">
          {this.props.showAuthor &&
            <Avatar
              className="comment-form__avatar avatar--supporting"
              url={this.props.author.avatar}
              initials={this.props.author.initials}
            />
          }
          <ExpandingTextArea
            className="comment-form__input"
            handleOnChange={this.updateInputValue}
            handleOnFocus={this.toggleInputHasFocus}
            focusOnMount={this.props.focusOnMount}
            value={this.state.inputValue}
            placeholder={this.props.placeholder}
            onRowCountChange={this.props.onRowCountChange}
            setValue
          />
        </div>
        {this.state.inputHasFocused && (
          <div>
            <ShortcutTrigger
              shortcutKey="Enter"
              onShortcutTrigger={this.onSubmit}
              withCtrlKey
            />
            <ShortcutTrigger
              shortcutKey="Enter"
              onShortcutTrigger={this.onSubmit}
              withMetaKey
            />
          </div>
        )}
        <CommentFormActions
          onSubmit={this.onSubmit}
          onCancel={this.cancelComment}
          hasValue={hasValue}
          isSubmitting={this.props.isSubmitting}
          editing={this.props.editing}
        />
      </form>
    );
  }
}

export default CommentForm;
