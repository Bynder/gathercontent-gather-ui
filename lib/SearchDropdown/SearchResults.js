import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import EventCodeWatcher from '../EventCodeWatcher';
import Avatar from '../Avatar';
import AvatarInformation from '../Avatar/AvatarInformation';

class SearchResults extends Component {
  static propTypes = {
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
    hideResults: PropTypes.func.isRequired,
    input: PropTypes.shape()
  };

  static defaultProps = {
    input: null
  };

  state = { highlightedIndex: 0 };

  highlightPrevResult = () => {
    const atStartOfResults = this.state.highlightedIndex === 0;

    this.setState(prevState => ({
      highlightedIndex: atStartOfResults
        ? this.props.results.length - 1
        : prevState.highlightedIndex - 1
    }));
  };

  highlightNextResult = () => {
    const atEndOfResults =
      this.state.highlightedIndex === this.props.results.length - 1;

    this.setState(prevState => ({
      highlightedIndex: atEndOfResults ? 0 : prevState.highlightedIndex + 1
    }));
  };

  highlightSpecificResult = index =>
    this.setState({
      highlightedIndex: index
    });

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
    const escKey = 27;

    return (
      <Fragment>
        <EventCodeWatcher
          element={this.props.input}
          keyCode={downKey}
          eventName="keydown"
          onKeyCodePress={this.highlightNextResult}
          preventDefault
        />
        <EventCodeWatcher
          element={this.props.input}
          keyCode={upKey}
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
        <EventCodeWatcher
          element={this.props.input}
          keyCode={escKey}
          eventName="keydown"
          onKeyCodePress={this.props.hideResults}
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
        </Fragment>
      </Fragment>
    );
  }
}

export default SearchResults;
