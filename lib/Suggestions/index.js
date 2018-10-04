import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SuggestionItem from './SuggestionItem';
import { EventCodeWatcher } from '../';

class Suggestions extends Component {
  static Item = props => <SuggestionItem {...props} />;

  state = { highlightedIndex: 0 };

  changeFocus(increment) {
    this.setState({
      highlightedIndex: this.state.highlightedIndex + increment
    });
  }

  render() {
    const upKey = 38;
    const downKey = 40;

    return (
      <Fragment>
        <EventCodeWatcher
          keyCode={upKey}
          event="onkeypress"
          onKeyCodePress={() => this.changeFocus(-1)}
        />
        <EventCodeWatcher
          keyCode={downKey}
          event="onkeypress"
          onKeyCodePress={() => this.changeFocus(+1)}
        />
        {this.props.children(this.state.highlightedIndex)}
      </Fragment>
    );
  }
}

export default Suggestions;
