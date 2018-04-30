import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Avatar from '../../Avatar';
import CommentFormActions from './CommentFormActions';
import ShortcutTrigger from '../../ShortcutTrigger/index';
import CommentFormInput from './CommentFormInput';

class CommentForm extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCommentChange: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    onRowCountChange: PropTypes.func,
    author: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      initials: PropTypes.string
    }).isRequired,
    focusOnMount: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    editing: PropTypes.bool,
    showAuthor: PropTypes.bool,
    users: PropTypes.arrayOf(PropTypes.shape())
  };

  static defaultProps = {
    value: '',
    focusOnMount: false,
    onRowCountChange: () => {},
    onCancel: () => {},
    author: {
      name: '??',
      avatar: '',
      initials: ''
    },
    editing: false,
    showAuthor: true,
    users: []
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

  onSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    this.props.onSubmit(this.removeMentionMarkup());
    this.setState({ inputValue: '' });
  };

  toggleInputHasFocus = () => {
    this.setState({ inputHasFocused: !this.state.inputHasFocused });
  };

  cancelComment = () => {
    this.props.onCancel();
    this.setState({ inputValue: '' });
  };

  updateInputValue = e => {
    this.props.onCommentChange(this.props.id, e.target.value);
    this.setState({ inputValue: e.target.value });
  };

  removeMentionMarkup = () => {
    const pattern = /(?:@\[\w+\])+/gi;
    return this.state.inputValue.replace(pattern, match => {
      const mention = match.replace(/\]|\[/g, '');
      return mention;
    });
  };

  render() {
    const hasValue = !!this.state.inputValue || !!this.props.value;
    const additionalClasses = cx({
      'has-value': hasValue,
      'comment-form--inline': this.props.editing
    });
    return (
      <form
        className={`comment-form ${additionalClasses}`}
        onSubmit={this.onSubmit}
      >
        <div className="comment-form__body">
          {this.props.showAuthor && (
            <Avatar
              className="comment-form__avatar avatar--supporting"
              url={this.props.author.avatar}
              initials={this.props.author.initials}
            />
          )}

          <CommentFormInput
            inputValue={this.state.inputValue}
            handleOnChange={this.updateInputValue}
            placeholder={this.props.placeholder}
            handleOnFocus={this.toggleInputHasFocus}
            focusOnMount={this.props.focusOnMount}
            onRowCountChange={this.props.onRowCountChange}
            users={this.props.users}
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
          editing={this.props.editing}
        />
      </form>
    );
  }
}

export default CommentForm;
