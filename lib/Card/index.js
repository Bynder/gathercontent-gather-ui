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

  render() {
    const classNames = cx(`card ${this.props.className}`, {
      'card--selected': this.props.selected,
      'card--interactive': this.props.onClick
    });
    return (
      <div className={classNames} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}
Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

Card.defaultProps = {
  className: '',
  onClick: null,
  selected: false
};

export default Card;
