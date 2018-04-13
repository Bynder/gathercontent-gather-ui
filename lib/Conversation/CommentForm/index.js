import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { MentionsInput, Mention } from 'react-mentions';
import Avatar from '../../Avatar';
import AvatarInformation from '../../Avatar/AvatarInformation';
import CommentFormActions from './CommentFormActions';
import ShortcutTrigger from '../../ShortcutTrigger/index';

class CommentForm extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCommentChange: PropTypes.func.isRequired,
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
    showAuthor: PropTypes.bool,
    users: PropTypes.arrayOf(PropTypes.shape())
  };

  static defaultProps = {
    value: '',
    focusOnMount: false,
    onCancel: () => {},
    author: {
      name: '??',
      avatar: '',
      initials: ''
    },
    editing: false,
    showAuthor: true,
    users: [
      {
        id: '123',
        display: 'walterwhite',
        name: 'Mr Ben',
        initials: 'MB',
        email: 'heythere@lol.com',
        url: 'https://d3iw72m71ie81c.cloudfront.net/female-83.jpg'
      },
      {
        id: '456',
        display: 'jessepinkman',
        name: 'Jesse Pinkman',
        email: 'heythere@lol.com',
        initials: 'JP',
        url:
          'https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg'
      },
      {
        id: '789',
        initials: 'GF',
        display: 'gusfring',
        name: 'Gustavo "Gus" Fring',
        email: 'heythere@lol.com'
      },
      {
        id: 'saul',
        display: 'saulgoodman',
        name: 'Saul Goodman',
        initials: 'SG',
        email: 'heythere@lol.com'
      }
    ]
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
    const inputValue = !this.props.isSubmitting
      ? ''
      : this.removeMentionMarkup();
    this.setState({ inputValue });
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

  searchForUsers = term => {
    if (term.trim() !== '' && this.props.users.length > 0) {
      const filtered = this.props.users.filter(
        user =>
          user.name
            .toLowerCase()
            .split(' ')
            .filter(subStr => subStr.lastIndexOf(term, 0) === 0).length > 0 ||
          user.display.toLowerCase().lastIndexOf(term, 0) === 0
      );
      return filtered;
    }
    return this.props.users;
  };

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
          {this.props.showAuthor && (
            <Avatar
              className="comment-form__avatar avatar--supporting"
              url={this.props.author.avatar}
              initials={this.props.author.initials}
            />
          )}
          <div className="comment-form__input-wrapper">
            <MentionsInput
              className="comment-form__input"
              value={this.state.inputValue}
              onChange={this.updateInputValue}
              onFocus={this.toggleInputHasFocus}
              placeholder={this.props.placeholder}
              markup="@[__display__]"
              autoFocus={this.props.focusOnMount}
              displayTransform={(id, display) => `@${display}`}
            >
              <Mention
                trigger="@"
                data={search => this.searchForUsers(search)}
                appendSpaceOnAdd
                renderSuggestion={suggestion => (
                  <Avatar url={suggestion.url} initials={suggestion.initials}>
                    <AvatarInformation
                      email={`@${suggestion.display}`}
                      name={suggestion.name}
                    />
                  </Avatar>
                )}
              />
            </MentionsInput>
          </div>
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
