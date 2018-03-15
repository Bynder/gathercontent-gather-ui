import React from 'react';
import PropTypes from 'prop-types';

const ColourPalette = props => (
  <div className="sg__base">
    { props.colours.map(colour => (
      <div className="sg__colour" key={colour.name}>
        <div
          style={{ backgroundColor: colour.rgbValue }}
          className="sg__colour-block"
        />
        <code className="sg__colour-var">{colour.name}</code>
        <p className="sg__colour-value sg__colour-value--caps">
          {colour.hexValue}
        </p>
        <p className="sg__colour-value">
          {colour.rgbValue}
        </p>
      </div>
    )) }
  </div>
);

ColourPalette.propTypes = {
  colours: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ColourPalette;
