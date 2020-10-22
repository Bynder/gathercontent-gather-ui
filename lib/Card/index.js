import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardFooterLeft from './CardFooterLeft';
import CardFooterRight from './CardFooterRight';
import CardSubHeading from './CardSubHeading';

class Card extends Component {
  static Content = CardContent;

  static Footer = CardFooter;

  static FooterLeft = CardFooterLeft;

  static FooterRight = CardFooterRight;

  static SubHeading = CardSubHeading;

  handleEditKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.onClick(e);
    }
  };

  render() {
    const classNames = cx(`card ${this.props.className}`, {
      'card--selected': this.props.selected,
      'card--interactive': this.props.onClick
    });

    return (
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        role={this.props.onClick ? 'button' : 'presentation'}
        className={classNames}
        onClick={this.props.onClick}
        onKeyUp={this.handleKeyPress}
      >
        <div className={`card__inner bg-white ${this.props.innerClassNames}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  className: PropTypes.string,
  innerClassNames: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

Card.defaultProps = {
  className: '',
  innerClassNames: '',
  onClick: null,
  selected: false
};

export default Card;
