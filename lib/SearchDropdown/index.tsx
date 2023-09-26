import React, { Component } from "react";
import cx from "classnames";
import Icon from "../Icon";
import SearchResults from "./SearchResults";

export class SearchDropdown extends Component {
  input: any;

  constructor() {
    // @ts-expect-error TS(2554): Expected 1-2 arguments, but got 0.
    super();

    this.state = {
      inputValue: "",
    };

    this.input = React.createRef();
  }

  updateInputValue = (event: any) => {
    // @ts-expect-error TS(2339): Property 'handleOnChange' does not exist on type '... Remove this comment to see the full error message
    this.props.handleOnChange(event);
    this.setState({ inputValue: event.target.value });
  };

  clearInputValue = () => {
    this.setState({ inputValue: "" });
    // @ts-expect-error TS(2339): Property 'onInputClear' does not exist on type 'Re... Remove this comment to see the full error message
    this.props.onInputClear();
  };

  render() {
    const {
      // @ts-expect-error TS(2339): Property 'alignRight' does not exist on type 'Read... Remove this comment to see the full error message
      alignRight,
      // @ts-expect-error TS(2339): Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
      className,
      // @ts-expect-error TS(2339): Property 'listClassName' does not exist on type 'R... Remove this comment to see the full error message
      listClassName,
      // @ts-expect-error TS(2339): Property 'fullWidth' does not exist on type 'Reado... Remove this comment to see the full error message
      fullWidth,
      // @ts-expect-error TS(2339): Property 'resultsTitle' does not exist on type 'Re... Remove this comment to see the full error message
      resultsTitle,
      // @ts-expect-error TS(2339): Property 'focusOnMount' does not exist on type 'Re... Remove this comment to see the full error message
      focusOnMount,
      // @ts-expect-error TS(2339): Property 'placeholder' does not exist on type 'Rea... Remove this comment to see the full error message
      placeholder,
    } = this.props;

    const showResults =
      // @ts-expect-error TS(2339): Property 'results' does not exist on type 'Readonl... Remove this comment to see the full error message
      this.props.results.length > 0 && this.state.inputValue.length > 0;

    const menuClass = cx(`search-dropdown ${className}`, {
      // @ts-expect-error TS(2339): Property 'direction' does not exist on type 'Reado... Remove this comment to see the full error message
      dropup: this.props.direction === "up",
      "full-width": fullWidth,
      open: showResults,
    });

    const listClass = cx(`dropdown-menu ${listClassName}`, {
      "align-right": alignRight,
    });

    return (
      <div className={menuClass}>
        <input
          // @ts-expect-error TS(2339): Property 'inputValue' does not exist on type 'Read... Remove this comment to see the full error message
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          type="text"
          className="dropdown-search__input"
          placeholder={placeholder}
          autoFocus={focusOnMount} // eslint-disable-line jsx-a11y/no-autofocus
          ref={this.input}
        />

        {showResults && (
          <ul className={listClass}>
            <li className="dropdown__item dropdown__item--title">
              <button
                type="button"
                className="dropdown__link dropdown__title"
                onClick={this.clearInputValue}
              >
                <span className="dropdown__item--name">{resultsTitle}</span>
                <span className="dropdown__item--additional">
                  <Icon name="cross" text="close" hideText />
                </span>
              </button>
            </li>
            <SearchResults
              // @ts-expect-error TS(2769): No overload matches this call.
              results={this.props.results}
              input={this.input.current}
              hideResults={this.clearInputValue}
            />
          </ul>
        )}
      </div>
    );
  }
}

// @ts-expect-error TS(2339): Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
SearchDropdown.defaultProps = {
  placeholder: "Search...",
  alignRight: false,
  results: [],
  className: "",
  listClassName: "",
  fullWidth: false,
  resultsTitle: "Results",
  handleOnChange: () => {},
  onInputClear: () => {},
  direction: "down",
  focusOnMount: false,
};

export default SearchDropdown;
