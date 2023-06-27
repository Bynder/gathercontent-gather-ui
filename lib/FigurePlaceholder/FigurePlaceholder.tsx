import React from 'react';
import PropTypes from 'prop-types';
import FigurePlaceholderSVG from '../../assets/figureplaceholder.svg';

function FigurePlaceholder(props) {
  return (
    <div className={`figure__placeholder ${props.className}`}>
      <div className={`figure__placeholder__svg ${props.svgClassName}`}>
        <FigurePlaceholderSVG />
      </div>
      {props.children}
    </div>
  );
}

FigurePlaceholder.propTypes = {
  svgClassName: PropTypes.string
};

FigurePlaceholder.defaultProps = {
  svgClassName: ''
};

export { FigurePlaceholder };
