import React from 'react';
import PropTypes from 'prop-types';

const ColourPalette = props => (
  <div className="sg__base">
    { props.colours.map(colour => (
      <div className="sg__colour">
        <div style={{ backgroundColor: colour.value }} className="sg__colour-block" />
        <p>{colour.name} <br /> {colour.value}</p>
      </div>
    )) }
  </div>
);

ColourPalette.propTypes = {
  colours: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ColourPalette;
