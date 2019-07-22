import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MentionsInput, Mention } from 'react-mentions';
import Avatar from '../Avatar';
import AvatarInformation from '../Avatar/AvatarInformation';
import UserSearchDropdown from '../UserSearchDropdown';
import { filterUsers } from '../helpers';

class MentionsFormInput extends Component {
  static propTypes = {
    inputValue: PropTypes.string,
    handleOnChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    handleOnFocus: PropTypes.func,
    focusOnMount: PropTypes.bool,
    onRowCountChange: PropTypes.func,
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    displayEmail: PropTypes.bool.isRequired,
    dropdownAutoPosition: PropTypes.bool.isRequired,
    defaultUsers: PropTypes.arrayOf(PropTypes.shape())
  };

  static defaultProps = {
    placeholder: '',
    focusOnMount: false,
    inputValue: '',
    handleOnFocus: () => {},
    onRowCountChange: () => {},
    defaultUsers: []
  };

  state = {
    inputHeight: '0px',
    selection: {
      start: 0,
      end: 0
    }
  };

  componentDidMount() {
    this.setState({ inputHeight: this.getInputHeight() }); // eslint-disable-line react/no-did-mount-set-state
    this.addDefaultUsers();
  }

  addDefaultUsers = async () => {
    const { defaultUsers } = this.props;
    if (defaultUsers.length) {
      defaultUsers.map(user =>
        setTimeout(() => {
          this.addMention(user);
        }, 5)
      );
    }
  };

  handleSelection = e => {
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    this.setState({
      selection: {
        start,
        end
      }
    });
  };

  getInputHeight = () => {
    if (this.input) {
      return this.input.getBoundingClientRect().height;
    }
    return this.state.inputHeight;
  };

  handleChange = event => {
    const newHeight = this.getInputHeight();
    if (newHeight !== this.state.inputHeight) {
      this.props.onRowCountChange();
      this.setState({ inputHeight: newHeight });
    }
    return this.props.handleOnChange(event);
  };

  searchForUsers = term => {
    if (term.trim() !== '' && this.props.users.length > 0) {
      return filterUsers(this.props.users, term, this.props.displayEmail);
    }
    return this.props.users;
  };

  addMention = user => {
    if (this.mentionInput) {
      this.mentionInput.wrappedInstance.addMention(
        {
          id: user.id,
          display: user.display
        },
        {
          mentionDescriptor: this.mentionInput.props.children,
          querySequenceStart: this.state.selection.start,
          querySequenceEnd: this.state.selection.end,
          plainTextValue: ''
        }
      );
    }
  };

  render() {
    return (
      <div
        className="mention-form__input-wrapper"
        ref={el => {
          this.input = el;
        }}
      >
        <MentionsInput
          ref={e => {
            this.mentionInput = e;
          }}
          onSelect={this.handleSelection}
          className="mention-form__input"
          value={this.props.inputValue}
          onChange={this.handleChange}
          onFocus={this.props.handleOnFocus}
          onBlur={this.props.handleOnFocus}
          placeholder={this.props.placeholder}
          markup="@[__display__]"
          autoFocus={this.props.focusOnMount}
          displayTransform={(id, display) => `@${display}`}
          suggestionsPortalHost={
            this.props.dropdownAutoPosition ? this.mentionsPortal : null
          }
        >
          <Mention
            trigger="@"
            data={search => this.searchForUsers(search)}
            appendSpaceOnAdd
            renderSuggestion={suggestion => (
              <Avatar url={suggestion.avatar} initials={suggestion.initials}>
                <AvatarInformation
                  email={
                    this.props.displayEmail
                      ? suggestion.email
                      : `@${suggestion.display}`
                  }
                  name={suggestion.name}
                />
              </Avatar>
            )}
          />
        </MentionsInput>
        <UserSearchDropdown
          users={this.props.users}
          addUser={this.addMention}
          displayEmail={this.props.displayEmail}
          dropdownAutoPosition={this.props.dropdownAutoPosition}
          searchHeading="Mention..."
          className="mention-form__search"
          useAtIcon
          tooltipText="Mention a team member…"
        />
        {this.props.dropdownAutoPosition && (
          <div
            ref={mentionsPortal => {
              this.mentionsPortal = mentionsPortal;
            }}
          />
        )}
      </div>
    );
  }
}

export default MentionsFormInput;
