import React, { Component } from "react";
import PropTypes from "prop-types";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { MentionsInput, Mention } from "react-mentions";
import Avatar from "../Avatar";
import AvatarInformation from "../Avatar/AvatarInformation";
import UserSearchDropdown from "../UserSearchDropdown";
import { filterUsers } from "../helpers";

class MentionsFormInput extends Component {
  static propTypes = {
    inputValue: PropTypes.string,
    handleOnChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    handleOnFocus: PropTypes.func,
    focusOnMount: PropTypes.bool,
    onRowCountChange: PropTypes.func,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    displayEmail: PropTypes.bool.isRequired,
    dropdownAutoPosition: PropTypes.bool.isRequired,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    defaultUsers: PropTypes.arrayOf(PropTypes.shape()),
  };

  static defaultProps = {
    placeholder: "",
    focusOnMount: false,
    inputValue: "",
    handleOnFocus: () => {},
    onRowCountChange: () => {},
    defaultUsers: [],
  };

  input: any;

  mentionInput: any;

  mentionsPortal: any;

  state = {
    inputHeight: "0px",
    selection: {
      start: 0,
      end: 0,
    },
  };

  componentDidMount() {
    this.setState({ inputHeight: this.getInputHeight() }); // eslint-disable-line react/no-did-mount-set-state
    this.addDefaultUsers();
  }

  addDefaultUsers = async () => {
    // @ts-expect-error TS(2339): Property 'defaultUsers' does not exist on type 'Re... Remove this comment to see the full error message
    const { defaultUsers } = this.props;
    if (defaultUsers.length) {
      defaultUsers.map((user: any) =>
        setTimeout(() => {
          this.addMention(user);
        }, 5)
      );
    }
  };

  handleSelection = (e: any) => {
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    this.setState({
      selection: {
        start,
        end,
      },
    });
  };

  getInputHeight = () => {
    if (this.input) {
      return this.input.getBoundingClientRect().height;
    }
    return this.state.inputHeight;
  };

  handleChange = (event: any) => {
    const newHeight = this.getInputHeight();
    if (newHeight !== this.state.inputHeight) {
      // @ts-expect-error TS(2339): Property 'onRowCountChange' does not exist on type... Remove this comment to see the full error message
      this.props.onRowCountChange();
      this.setState({ inputHeight: newHeight });
    }
    // @ts-expect-error TS(2339): Property 'handleOnChange' does not exist on type '... Remove this comment to see the full error message
    return this.props.handleOnChange(event);
  };

  searchForUsers = (term: any) => {
    // @ts-expect-error TS(2339): Property 'users' does not exist on type 'Readonly<... Remove this comment to see the full error message
    if (term.trim() !== "" && this.props.users.length > 0) {
      // @ts-expect-error TS(2339): Property 'users' does not exist on type 'Readonly<... Remove this comment to see the full error message
      return filterUsers(this.props.users, term, this.props.displayEmail);
    }
    // @ts-expect-error TS(2339): Property 'users' does not exist on type 'Readonly<... Remove this comment to see the full error message
    return this.props.users;
  };

  addMention = (user: any) => {
    if (this.mentionInput) {
      this.mentionInput.wrappedInstance.addMention(
        {
          id: user.id,
          display: user.display,
        },
        {
          mentionDescriptor: this.mentionInput.props.children,
          querySequenceStart: this.state.selection.start,
          querySequenceEnd: this.state.selection.end,
          plainTextValue: "",
        }
      );
    }
  };

  render() {
    return (
      <div
        className="mention-form__input-wrapper"
        ref={(el) => {
          this.input = el;
        }}
      >
        <MentionsInput
          ref={(e: any) => {
            this.mentionInput = e;
          }}
          onSelect={this.handleSelection}
          className="mention-form__input"
          // @ts-expect-error TS(2339): Property 'inputValue' does not exist on type 'Read... Remove this comment to see the full error message
          value={this.props.inputValue}
          onChange={this.handleChange}
          // @ts-expect-error TS(2339): Property 'handleOnFocus' does not exist on type 'R... Remove this comment to see the full error message
          onFocus={this.props.handleOnFocus}
          // @ts-expect-error TS(2339): Property 'handleOnFocus' does not exist on type 'R... Remove this comment to see the full error message
          onBlur={this.props.handleOnFocus}
          // @ts-expect-error TS(2339): Property 'placeholder' does not exist on type 'Rea... Remove this comment to see the full error message
          placeholder={this.props.placeholder}
          markup="@[__display__]"
          // @ts-expect-error TS(2339): Property 'focusOnMount' does not exist on type 'Re... Remove this comment to see the full error message
          autoFocus={this.props.focusOnMount}
          displayTransform={(id: any, display: any) => `@${display}`}
          suggestionsPortalHost={
            // @ts-expect-error TS(2339): Property 'dropdownAutoPosition' does not exist on ... Remove this comment to see the full error message
            this.props.dropdownAutoPosition ? this.mentionsPortal : null
          }
        >
          <Mention
            trigger="@"
            data={(search: any) => this.searchForUsers(search)}
            appendSpaceOnAdd
            renderSuggestion={(suggestion: any) => (
              <Avatar url={suggestion.avatar} initials={suggestion.initials}>
                <AvatarInformation
                  email={
                    // @ts-expect-error TS(2339): Property 'displayEmail' does not exist on type 'Re... Remove this comment to see the full error message
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
          // @ts-expect-error TS(2769): No overload matches this call.
          users={this.props.users}
          addUser={this.addMention}
          // @ts-expect-error TS(2339): Property 'displayEmail' does not exist on type 'Re... Remove this comment to see the full error message
          displayEmail={this.props.displayEmail}
          // @ts-expect-error TS(2339): Property 'dropdownAutoPosition' does not exist on ... Remove this comment to see the full error message
          dropdownAutoPosition={this.props.dropdownAutoPosition}
          searchHeading="Mention..."
          className="mention-form__search"
          useAtIcon
          tooltipText="Mention a team member…"
        />
        {/* @ts-expect-error TS(2339): Property 'dropdownAutoPosition' does not exist on ... Remove this comment to see the full error message */}
        {this.props.dropdownAutoPosition && (
          <div
            ref={(mentionsPortal) => {
              this.mentionsPortal = mentionsPortal;
            }}
          />
        )}
      </div>
    );
  }
}

export default MentionsFormInput;
