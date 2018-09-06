import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Avatar from '../Avatar';
import MentionsFormActions from './MentionsFormActions';
import ShortcutTrigger from '../ShortcutTrigger/index';
import MentionsFormInput from './MentionsFormInput';

const pattern = /(?:@\[\w+\])+/gi;

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
    dropdownAutoTopPosition: PropTypes.bool
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
    dropdownAutoTopPosition: false
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
      this.props.onInputChange(this.state.inputValue);
    }
  }

  onSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    this.props.onSubmit(this.removeMentionMarkup());
    this.setState({ inputValue: '' });
    this.props.onInputChange('');
  };

  toggleInputHasFocus = () => {
    this.setState({ inputHasFocused: !this.state.inputHasFocused });
  };

  cancelComment = () => {
    this.props.onCancel();
    this.setState({ inputValue: '' });
  };

  updateInputValue = e => {
    this.props.onInputChange(e.target.value);
    this.setState({ inputValue: e.target.value });
  };

  removeMentionMarkup = () =>
    this.state.inputValue.replace(pattern, match => {
      const mention = match.replace(/\]|\[/g, '');
      return mention;
    });

  render() {
    const hasValue = !!this.state.inputValue || !!this.props.value;
    const hasMention = this.props.disableUntilMention
      ? this.state.inputValue.search(pattern) !== -1
      : true;
    const additionalClasses = cx({
      'has-value': hasValue,
      'mention-form--inline': this.props.editing,
      'hide-author': !this.props.showAuthor || !this.props.author
    });
    return (
      <form
        className={`mention-form ${additionalClasses}`}
        onSubmit={this.onSubmit}
      >
        <div className="mention-form__body">
          {this.props.showAuthor &&
            this.props.author && (
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
            dropdownAutoTopPosition={this.props.dropdownAutoTopPosition}
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
          hasValue={hasValue && hasMention}
          editing={this.props.editing}
          users={this.props.users}
        />
      </form>
    );
  }
}

export default MentionsForm;
