import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error TS(2307): Cannot find module '../../assets/figureplaceholder... Remove this comment to see the full error message
import FigurePlaceholderSVG from '../../assets/figureplaceholder.svg';

function FigurePlaceholder(props: any) {
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
