import React, { Component, Fragment } from "react";
import cx from "classnames";
import EventCodeWatcher from "../EventCodeWatcher";
import Avatar from "../Avatar";
import AvatarInformation from "../Avatar/AvatarInformation";

class SearchResults extends Component {
  state = { highlightedIndex: 0 };

  static defaultProps = {
    input: null,
  };

  highlightPrevResult = () => {
    const atStartOfResults = this.state.highlightedIndex === 0;

    this.setState((prevState) => ({
      highlightedIndex: atStartOfResults
        ? // @ts-expect-error TS(2339): Property 'results' does not exist on type 'Readonl... Remove this comment to see the full error message
          this.props.results.length - 1
        : // @ts-expect-error TS(2339): Property 'highlightedIndex' does not exist on type... Remove this comment to see the full error message
          prevState.highlightedIndex - 1,
    }));
  };

  highlightNextResult = () => {
    const atEndOfResults =
      // @ts-expect-error TS(2339): Property 'results' does not exist on type 'Readonl... Remove this comment to see the full error message
      this.state.highlightedIndex === this.props.results.length - 1;

    this.setState((prevState) => ({
      // @ts-expect-error TS(2339): Property 'highlightedIndex' does not exist on type... Remove this comment to see the full error message
      highlightedIndex: atEndOfResults ? 0 : prevState.highlightedIndex + 1,
    }));
  };

  highlightSpecificResult = (index: any) =>
    this.setState({
      highlightedIndex: index,
    });

  triggerHighlightedResultAction = () => {
    // @ts-expect-error TS(2339): Property 'results' does not exist on type 'Readonl... Remove this comment to see the full error message
    if (this.props.results[this.state.highlightedIndex].action) {
      // @ts-expect-error TS(2339): Property 'results' does not exist on type 'Readonl... Remove this comment to see the full error message
      this.props.results[this.state.highlightedIndex].action();
    }
  };

  render() {
    // @ts-expect-error TS(2339): Property 'input' does not exist on type 'Readonly<... Remove this comment to see the full error message
    if (!this.props.input) {
      return null;
    }

    const upKey = 38;
    const downKey = 40;
    const enterKey = 13;
    const escKey = 27;

    return (
      <>
        <EventCodeWatcher
          // @ts-expect-error TS(2339): Property 'input' does not exist on type 'Readonly<... Remove this comment to see the full error message
          element={this.props.input}
          keyCode={downKey}
          eventName="keydown"
          onKeyCodePress={this.highlightNextResult}
          preventDefault
        />
        <EventCodeWatcher
          // @ts-expect-error TS(2339): Property 'input' does not exist on type 'Readonly<... Remove this comment to see the full error message
          element={this.props.input}
          keyCode={upKey}
          eventName="keydown"
          onKeyCodePress={this.highlightPrevResult}
          preventDefault
        />
        <EventCodeWatcher
          // @ts-expect-error TS(2339): Property 'input' does not exist on type 'Readonly<... Remove this comment to see the full error message
          element={this.props.input}
          keyCode={enterKey}
          eventName="keypress"
          onKeyCodePress={this.triggerHighlightedResultAction}
        />
        <EventCodeWatcher
          // @ts-expect-error TS(2339): Property 'input' does not exist on type 'Readonly<... Remove this comment to see the full error message
          element={this.props.input}
          keyCode={escKey}
          eventName="keydown"
          // @ts-expect-error TS(2339): Property 'hideResults' does not exist on type 'Rea... Remove this comment to see the full error message
          onKeyCodePress={this.props.hideResults}
        />

        <>
          {/* @ts-expect-error TS(2339): Property 'results' does not exist on type 'Readonl... Remove this comment to see the full error message */}
          {this.props.results.map((result: any, index: any) => {
            const idKey = `search-results-item-${index}`;
            const className = cx("dropdown__link dropdown__avatar", {
              "dropdown__link--highlighted":
                this.state.highlightedIndex === index,
            });

            return (
              <li key={idKey} className="dropdown__item dropdown__item--avatar">
                <button
                  type="button"
                  className={className}
                  onClick={result.action}
                  onMouseOver={() => this.highlightSpecificResult(index)}
                  onFocus={() => this.highlightSpecificResult(index)}
                >
                  <Avatar url={result.avatar} initials={result.initials}>
                    <AvatarInformation
                      name={result.name}
                      email={result.email}
                    />
                  </Avatar>
                </button>
              </li>
            );
          })}
        </>
      </>
    );
  }
}

export default SearchResults;
