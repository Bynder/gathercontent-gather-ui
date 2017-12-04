import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropdownSwitcher from '../DropdownSwitcher';

class SectionHeader extends Component {
  renderTitle() {
    if (this.props.children) {
      const title = (
        <h1 className="section-header__title">{this.props.title}</h1>
      );

      return (
        <DropdownSwitcher {...this.props} title={title}>
          {this.props.children}
        </DropdownSwitcher>
      );
    }

    return <h1 className="section-header__title">{this.props.title}</h1>;
  }

  render() {
    return (
      <div className="section-header">
        <div className="section-header__inner">
          {this.renderTitle()}
          {this.props.cta}
        </div>
      </div>
    );
  }
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  cta: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

SectionHeader.defaultProps = {
  cta: null,
  children: null
};

export default SectionHeader;
