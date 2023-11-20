import React, { Component } from "react";
import cx from "classnames";
import Button from "../Button";
import Icon from "../Icon";
import ShortcutTrigger from "../ShortcutTrigger";

class SearchInput extends Component {
  handleKeyPress: any;

  textinput: any;

  state = {
    inputValue: "",
    isFocussed: false,
  };

  handleChange = (event: any) => {
    this.setState({ inputValue: event.target.value });
    // @ts-expect-error TS(2339): Property 'onChange' does not exist on type 'Readon... Remove this comment to see the full error message
    this.props.onChange(event.target.value);
    if (event.target.value.trim() === "") {
      // @ts-expect-error TS(2339): Property 'hideBody' does not exist on type 'Readon... Remove this comment to see the full error message
      return this.props.hideBody();
    }
    // @ts-expect-error TS(2339): Property 'displayBody' does not exist on type 'Rea... Remove this comment to see the full error message
    return this.props.displayBody();
  };

  clearInput = () => {
    this.handleChange({ target: { value: "" } });
    this.handleSearchClick();
  };

  handleFocus = () =>
    this.setState({ isFocussed: true }, () => {
      // @ts-expect-error TS(2339): Property 'showBody' does not exist on type 'Readon... Remove this comment to see the full error message
      if (this.state.inputValue !== "" && !this.props.showBody) {
        // @ts-expect-error TS(2339): Property 'displayBody' does not exist on type 'Rea... Remove this comment to see the full error message
        this.props.displayBody();
      }
    });

  handleSearchClick = () => {
    this.setState({ isFocussed: true }, () => this.textinput.focus());
  };

  handleEscape = () => {
    // @ts-expect-error TS(2339): Property 'hideBody' does not exist on type 'Readon... Remove this comment to see the full error message
    this.props.hideBody();
    this.setState({ isFocussed: false });
  };

  render() {
    // @ts-expect-error TS(2339): Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
    const classNames = cx(`gui-search__input ${this.props.className}`, {
      // @ts-expect-error TS(2339): Property 'showBody' does not exist on type 'Readon... Remove this comment to see the full error message
      "gui-is-focus": this.props.showBody || this.state.isFocussed,
    });
    return (
      <div className={classNames}>
        <ShortcutTrigger
          shortcutKey="Escape"
          onShortcutTrigger={this.handleEscape}
        />
        <label className="sr-only" htmlFor="search-input">
          Search
        </label>
        <input
          id="search-input"
          className="gui-search__input--input"
          onChange={this.handleChange}
          value={this.state.inputValue}
          onFocus={this.handleFocus}
          onBlur={() => this.setState({ isFocussed: false })}
          ref={(textinput) => {
            this.textinput = textinput;
          }}
          onKeyPress={this.handleKeyPress}
        />
        <Button
          className="gui-search__input--clear"
          types={["icon-only"]}
          clickHandler={this.clearInput}
          title={this.state.inputValue ? "Clear search" : "Close search"}
        >
          <Icon name="cancel" />
        </Button>
        <Button
          className="gui-search__input--start"
          types={["icon-only"]}
          clickHandler={this.handleSearchClick}
          title="Open search"
        >
          <Icon name="search" />
        </Button>
      </div>
    );
  }
}

// @ts-expect-error TS(2339): Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
SearchInput.defaultProps = {
  className: "",
  showBody: false,
};

export default SearchInput;
