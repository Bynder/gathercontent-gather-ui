import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SectionHeader extends Component {
  renderTitle() {
    if (typeof this.props.title === 'string') {
      return <h1 className="section-header__title">{this.props.title}</h1>;
    }

    return this.props.title;
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
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]).isRequired,
  cta: PropTypes.node
};

SectionHeader.defaultProps = {
  cta: null
};

export default SectionHeader;
