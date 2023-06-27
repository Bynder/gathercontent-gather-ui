import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Avatar from '../Avatar';
import MentionsFormActions from './MentionsFormActions';
import ShortcutTrigger from '../ShortcutTrigger/index';
import MentionsFormInput from './MentionsFormInput';
import { MENTION_REGEX, MENTION_OR_AT_REGEX } from '../constants';

class MentionsForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func,
    onCancel: PropTypes.func,
    onRowCountChange: PropTypes.func,
    author: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      initials: PropTypes.string
    }),
    focusOnMount: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    editing: PropTypes.bool,
    showAuthor: PropTypes.bool,
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    cancelText: PropTypes.string,
    submitText: PropTypes.string,
    displayEmail: PropTypes.bool,
    disableUntilMention: PropTypes.bool,
    disableUntilValue: PropTypes.bool,
    dropdownAutoPosition: PropTypes.bool,
    defaultUsers: PropTypes.arrayOf(PropTypes.shape()),
    className: PropTypes.string,
    displayMentionCount: PropTypes.bool
  };

  static defaultProps = {
    value: '',
    focusOnMount: false,
    onRowCountChange: () => {},
    onInputChange: () => {},
    onCancel: () => {},
    author: null,
    editing: false,
    showAuthor: true,
    cancelText: 'Cancel',
    submitText: 'Submit',
    displayEmail: false,
    disableUntilMention: false,
    disableUntilValue: true,
    dropdownAutoPosition: false,
    defaultUsers: [],
    className: '',
    displayMentionCount: true
  };

  state = {
    inputValue: this.props.value,
    inputHasFocused: false,
    mentionCount: 0
  };

  componentDidMount() {
    if (this.state.inputValue) {
      this.props.onInputChange(
        this.state.inputValue,
        this.getMentionsDisplayNames()
      );
    }
  }

  onSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    this.props.onSubmit(
      this.removeMentionMarkup(),
      this.getMentionsDisplayNames()
    );
    this.setState({ inputValue: '' });
    this.props.onInputChange('', this.getMentionsDisplayNames());
  };

  toggleInputHasFocus = () => {
    this.setState(prevState => ({
      inputHasFocused: !prevState.inputHasFocused
    }));
  };

  cancelComment = () => {
    this.props.onCancel();
    this.setState({ inputValue: '' });
  };

  updateInputValue = e => {
    const { value } = e.target;
    const mentionCount = (value.match(MENTION_OR_AT_REGEX) || []).length;

    this.setState({ inputValue: value, mentionCount }, () => {
      this.props.onInputChange(value, this.getMentionsDisplayNames());
    });
  };

  getMentionsDisplayNames = () => {
    const mentionsInput = this.removeMentionMarkup();
    const mentions = mentionsInput.match(/@([a-z]|[0-9])+/gi) || [];

    return mentions.map(mention => mention.substring(1));
  };

  removeMentionMarkup = () =>
    this.state.inputValue.replace(MENTION_REGEX, match => {
      const mention = match.replace(/\]|\[/g, '');
      return mention;
    });

  render() {
    const hasValue = !!this.state.inputValue || !!this.props.value;
    const disableSubmit =
      (this.props.disableUntilMention && this.state.mentionCount <= 0) ||
      (this.props.disableUntilValue && !hasValue);
    const additionalClasses = cx({
      'has-value': hasValue,
      'mention-form--inline': this.props.editing,
      'hide-author': !this.props.showAuthor || !this.props.author
    });

    return (
      <form
        className={`mention-form ${additionalClasses} ${this.props.className}`}
        onSubmit={this.onSubmit}
      >
        <div className="mention-form__body">
          {this.props.showAuthor && this.props.author && (
            <Avatar
              className="mention-form__avatar avatar--supporting"
              url={this.props.author.avatar}
              initials={this.props.author.initials}
            />
          )}

          <MentionsFormInput
            inputValue={this.state.inputValue}
            handleOnChange={this.updateInputValue}
            placeholder={this.props.placeholder}
            handleOnFocus={this.toggleInputHasFocus}
            focusOnMount={this.props.focusOnMount}
            onRowCountChange={this.props.onRowCountChange}
            users={this.props.users}
            displayEmail={this.props.displayEmail}
            dropdownAutoPosition={this.props.dropdownAutoPosition}
            defaultUsers={this.props.defaultUsers}
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
        <MentionsFormActions
          submitText={this.props.submitText}
          cancelText={this.props.cancelText}
          onSubmit={this.onSubmit}
          onCancel={this.cancelComment}
          disableSubmit={disableSubmit}
          editing={this.props.editing}
          users={this.props.users}
          mentionCount={this.state.mentionCount}
          displayMentionCount={this.props.displayMentionCount}
        />
      </form>
    );
  }
}

export default MentionsForm;
