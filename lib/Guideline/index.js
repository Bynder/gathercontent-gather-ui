import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../';

class Guideline extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    title: PropTypes.string.isRequired
  };

  constructor() {
    super();
    this.state = { showContent: false };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({
      showContent: !this.state.showContent
    });
  }

  render() {
    const toggleText = this.state.showContent ? 'Hide details' : 'Show details';

    return (
      <div className="guideline">
        <div className="guideline__head">
          <h2 className="guideline__title">{this.props.title}</h2>
          <Button
            types={['link-default', 'collapse']}
            clickHandler={this.toggleShow}
            className="guideline__button"
          >
            {toggleText}
          </Button>
        </div>

        {this.state.showContent && (
          <div className="guideline__body">{this.props.children}</div>
        )}
      </div>
    );
  }
}

export default Guideline;
