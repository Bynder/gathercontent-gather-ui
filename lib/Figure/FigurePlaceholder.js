import React from 'react';
import PropTypes from 'prop-types';
import FigurePlaceholderSVG from '../../assets/figureplaceholder.svg';

const FigurePlaceholder = props => (
  <div className={`figure__placeholder ${props.className}`}>
    <div className="figure__placeholder__svg">
      <FigurePlaceholderSVG />
    </div>
    {props.children}
  </div>
);

FigurePlaceholder.propTypes = {
  children: PropTypes.shape(),
  className: PropTypes.string
};

FigurePlaceholder.defaultProps = {
  className: '',
  children: null
};

export default FigurePlaceholder;
