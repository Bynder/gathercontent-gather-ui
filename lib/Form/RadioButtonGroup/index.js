import React from 'react';

const RadioButtonGroup = props =>
  <div className="o-media-obj o-media-obj--radio">
    <input
      onChange={props.onChange}
      id={props.id}
      type="radio"
      name={props.name}
    />
    <label htmlFor={props.id} className="o-media-obj__info">
      <span className="o-media-obj__title">{ props.title }</span>
      <span className="o-media-obj__subtitle">{ props.subtitle }</span>
    </label>
  </div>;

RadioButtonGroup.defaultProps = {
  subtitle: '',
};

RadioButtonGroup.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string,
};

export default RadioButtonGroup;
