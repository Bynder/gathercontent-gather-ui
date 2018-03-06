import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
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
    this.state = { showContent: true };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({
      showContent: !this.state.showContent
    });
  }

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
          { this.props.children &&
            <Button
              types={['link-default', 'collapse']}
              clickHandler={this.toggleShow}
              className="guideline__button"
            >
              {toggleText}
            </Button>
          }
        </div>

        { this.props.children &&
         <div className="guideline__body">{this.props.children}</div>
        }
      </div>
    );
  }
}

export default Guideline;
