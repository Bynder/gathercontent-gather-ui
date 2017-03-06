import React from 'react';

const FontAwesomeIcon = (props) => {
  const klass = `fa ${props.name} ${props.className}`;
  const style = props.style;

  return (
    <i className={klass} style={style}>{props.children}</i>
  );
};

FontAwesomeIcon.defaultProps = {
  className: '',
  children: {},
  style: {},
};

FontAwesomeIcon.propTypes = {
  name: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  style: React.PropTypes.node,
};

export default FontAwesomeIcon;
