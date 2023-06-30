import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Avatar from "../Avatar";
import MentionsFormActions from "./MentionsFormActions";
import ShortcutTrigger from "../ShortcutTrigger/index";
import MentionsFormInput from "./MentionsFormInput";
import { MENTION_REGEX, MENTION_OR_AT_REGEX } from "../constants";

export class MentionsForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func,
    onCancel: PropTypes.func,
    onRowCountChange: PropTypes.func,
    author: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      initials: PropTypes.string,
    }),
    focusOnMount: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    editing: PropTypes.bool,
    showAuthor: PropTypes.bool,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    cancelText: PropTypes.string,
    submitText: PropTypes.string,
    displayEmail: PropTypes.bool,
    disableUntilMention: PropTypes.bool,
    disableUntilValue: PropTypes.bool,
    dropdownAutoPosition: PropTypes.bool,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    defaultUsers: PropTypes.arrayOf(PropTypes.shape()),
    className: PropTypes.string,
    displayMentionCount: PropTypes.bool,
  };

  static defaultProps = {
    value: "",
    focusOnMount: false,
    onRowCountChange: () => {},
    onInputChange: () => {},
    onCancel: () => {},
    author: null,
    editing: false,
    showAuthor: true,
    cancelText: "Cancel",
    submitText: "Submit",
    displayEmail: false,
    disableUntilMention: false,
    disableUntilValue: true,
    dropdownAutoPosition: false,
    defaultUsers: [],
    className: "",
    displayMentionCount: true,
  };

  state = {
    // @ts-expect-error TS(2339): Property 'value' does not exist on type 'Readonly<... Remove this comment to see the full error message
    inputValue: this.props.value,
    inputHasFocused: false,
    mentionCount: 0,
  };

  componentDidMount() {
    if (this.state.inputValue) {
      // @ts-expect-error TS(2339): Property 'onInputChange' does not exist on type 'R... Remove this comment to see the full error message
      this.props.onInputChange(
        this.state.inputValue,
        this.getMentionsDisplayNames()
      );
    }
  }

  onSubmit = (e: any) => {
    if (e) {
      e.preventDefault();
    }
    // @ts-expect-error TS(2339): Property 'onSubmit' does not exist on type 'Readon... Remove this comment to see the full error message
    this.props.onSubmit(
      this.removeMentionMarkup(),
      this.getMentionsDisplayNames()
    );
    this.setState({ inputValue: "" });
    // @ts-expect-error TS(2339): Property 'onInputChange' does not exist on type 'R... Remove this comment to see the full error message
    this.props.onInputChange("", this.getMentionsDisplayNames());
  };

  toggleInputHasFocus = () => {
    this.setState((prevState) => ({
      // @ts-expect-error TS(2339): Property 'inputHasFocused' does not exist on type ... Remove this comment to see the full error message
      inputHasFocused: !prevState.inputHasFocused,
    }));
  };

  cancelComment = () => {
    // @ts-expect-error TS(2339): Property 'onCancel' does not exist on type 'Readon... Remove this comment to see the full error message
    this.props.onCancel();
    this.setState({ inputValue: "" });
  };

  updateInputValue = (e: any) => {
    const { value } = e.target;
    const mentionCount = (value.match(MENTION_OR_AT_REGEX) || []).length;

    this.setState({ inputValue: value, mentionCount }, () => {
      // @ts-expect-error TS(2339): Property 'onInputChange' does not exist on type 'R... Remove this comment to see the full error message
      this.props.onInputChange(value, this.getMentionsDisplayNames());
    });
  };

  getMentionsDisplayNames = () => {
    const mentionsInput = this.removeMentionMarkup();
    const mentions = mentionsInput.match(/@([a-z]|[0-9])+/gi) || [];

    return mentions.map((mention: any) => mention.substring(1));
  };

  removeMentionMarkup = () =>
    this.state.inputValue.replace(MENTION_REGEX, (match: any) => {
      const mention = match.replace(/\]|\[/g, "");
      return mention;
    });

  render() {
    // @ts-expect-error TS(2339): Property 'value' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const hasValue = !!this.state.inputValue || !!this.props.value;
    const disableSubmit =
      // @ts-expect-error TS(2339): Property 'disableUntilMention' does not exist on t... Remove this comment to see the full error message
      (this.props.disableUntilMention && this.state.mentionCount <= 0) ||
      // @ts-expect-error TS(2339): Property 'disableUntilValue' does not exist on typ... Remove this comment to see the full error message
      (this.props.disableUntilValue && !hasValue);
    const additionalClasses = cx({
      "has-value": hasValue,
      // @ts-expect-error TS(2339): Property 'editing' does not exist on type 'Readonl... Remove this comment to see the full error message
      "mention-form--inline": this.props.editing,
      // @ts-expect-error TS(2339): Property 'showAuthor' does not exist on type 'Read... Remove this comment to see the full error message
      "hide-author": !this.props.showAuthor || !this.props.author,
    });

    return (
      <form
        // @ts-expect-error TS(2339): Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
        className={`mention-form ${additionalClasses} ${this.props.className}`}
        onSubmit={this.onSubmit}
      >
        <div className="mention-form__body">
          {/* @ts-expect-error TS(2339): Property 'showAuthor' does not exist on type 'Read... Remove this comment to see the full error message */}
          {this.props.showAuthor && this.props.author && (
            <Avatar
              className="mention-form__avatar avatar--supporting"
              // @ts-expect-error TS(2339): Property 'author' does not exist on type 'Readonly... Remove this comment to see the full error message
              url={this.props.author.avatar}
              // @ts-expect-error TS(2339): Property 'author' does not exist on type 'Readonly... Remove this comment to see the full error message
              initials={this.props.author.initials}
            />
          )}

          <MentionsFormInput
            inputValue={this.state.inputValue}
            handleOnChange={this.updateInputValue}
            // @ts-expect-error TS(2339): Property 'placeholder' does not exist on type 'Rea... Remove this comment to see the full error message
            placeholder={this.props.placeholder}
            handleOnFocus={this.toggleInputHasFocus}
            // @ts-expect-error TS(2339): Property 'focusOnMount' does not exist on type 'Re... Remove this comment to see the full error message
            focusOnMount={this.props.focusOnMount}
            // @ts-expect-error TS(2339): Property 'onRowCountChange' does not exist on type... Remove this comment to see the full error message
            onRowCountChange={this.props.onRowCountChange}
            // @ts-expect-error TS(2339): Property 'users' does not exist on type 'Readonly<... Remove this comment to see the full error message
            users={this.props.users}
            // @ts-expect-error TS(2339): Property 'displayEmail' does not exist on type 'Re... Remove this comment to see the full error message
            displayEmail={this.props.displayEmail}
            // @ts-expect-error TS(2339): Property 'dropdownAutoPosition' does not exist on ... Remove this comment to see the full error message
            dropdownAutoPosition={this.props.dropdownAutoPosition}
            // @ts-expect-error TS(2339): Property 'defaultUsers' does not exist on type 'Re... Remove this comment to see the full error message
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
          // @ts-expect-error TS(2339): Property 'submitText' does not exist on type 'Read... Remove this comment to see the full error message
          submitText={this.props.submitText}
          // @ts-expect-error TS(2339): Property 'cancelText' does not exist on type 'Read... Remove this comment to see the full error message
          cancelText={this.props.cancelText}
          // @ts-expect-error TS(2322): Type '{ submitText: any; cancelText: any; onSubmit... Remove this comment to see the full error message
          onSubmit={this.onSubmit}
          onCancel={this.cancelComment}
          disableSubmit={disableSubmit}
          // @ts-expect-error TS(2339): Property 'editing' does not exist on type 'Readonl... Remove this comment to see the full error message
          editing={this.props.editing}
          // @ts-expect-error TS(2339): Property 'users' does not exist on type 'Readonly<... Remove this comment to see the full error message
          users={this.props.users}
          mentionCount={this.state.mentionCount}
          // @ts-expect-error TS(2339): Property 'displayMentionCount' does not exist on t... Remove this comment to see the full error message
          displayMentionCount={this.props.displayMentionCount}
        />
      </form>
    );
  }
}

export default MentionsForm;
