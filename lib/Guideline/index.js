import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '..';

class Guideline extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.string
    ]),
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    children: ''
  };

  state = { showContent: true, style: null };

  componentDidMount() {
    if (this.props.children) {
      this.getHeight();
    }
  }

  toggleShow = () => {
    this.setState(prevState => ({
      showContent: !prevState.showContent
    }));
    this.getHeight();
  };

  getHeight = () => {
    if (this.guidelineBody) {
      const { height } = this.guidelineBody.getBoundingClientRect();
      if (height !== 0) {
        this.setState({ style: { maxHeight: height } });
      }
    }
  };

  render() {
    const toggleText = this.state.showContent
      ? 'Hide guidelines'
      : 'Show guidelines';
    const classNames = cx('guideline', {
      'is-active': this.state.showContent
    });
    return (
      <div className={classNames}>
        <div className="guideline__head">
          <h2 className="guideline__title">{this.props.title}</h2>
          {this.props.children && (
            <Button
              types={['link-default', 'collapse']}
              clickHandler={this.toggleShow}
              className="guideline__button"
            >
              {toggleText}
            </Button>
          )}
        </div>

        {this.props.children && (
          <div
            className="guideline__body"
            style={this.state.showContent ? this.state.style : null}
            ref={guidelineBody => {
              this.guidelineBody = guidelineBody;
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default Guideline;
