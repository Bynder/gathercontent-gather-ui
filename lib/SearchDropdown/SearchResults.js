import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { EventCodeWatcher, Avatar, AvatarInformation } from '../';

class SearchResults extends Component {
  state = { highlightedIndex: 0 };

  highlightPrevResult = () => {
    const atStartOfResults = this.state.highlightedIndex === 0;

    this.setState({
      highlightedIndex: atStartOfResults
        ? this.props.results.length - 1
        : this.state.highlightedIndex - 1
    });
  };

  highlightNextResult = () => {
    const atEndOfResults =
      this.state.highlightedIndex + 1 === this.props.results.length - 1;

    this.setState({
      highlightedIndex: atEndOfResults ? this.state.highlightedIndex + 1 : 0
    });
  };

  triggerHighlightedResultAction = () => {
    if (this.props.results[this.state.highlightedIndex].action) {
      this.props.results[this.state.highlightedIndex].action();
    }
  };

  render() {
    if (!this.props.input) {
      return null;
    }

    const upKey = 38;
    const downKey = 40;
    const enterKey = 13;

    return (
      <Fragment>
        <EventCodeWatcher
          element={this.props.input}
          keyCode={upKey}
          eventName="keydown"
          onKeyCodePress={this.highlightNextResult}
          preventDefault
        />
        <EventCodeWatcher
          element={this.props.input}
          keyCode={downKey}
          eventName="keydown"
          onKeyCodePress={this.highlightPrevResult}
          preventDefault
        />
        <EventCodeWatcher
          element={this.props.input}
          keyCode={enterKey}
          eventName="keypress"
          onKeyCodePress={this.triggerHighlightedResultAction}
        />

        <Fragment>
          {this.props.results.map((result, index) => {
            const idKey = `search-results-item-${index}`;
            const className = cx('dropdown__link dropdown__avatar', {
              'dropdown__link--highlighted':
                this.state.highlightedIndex === index
            });

            return (
              <li key={idKey} className="dropdown__item dropdown__item--avatar">
                <button className={className} onClick={result.action}>
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
        </Fragment>
      </Fragment>
    );
  }
}

export default SearchResults;
