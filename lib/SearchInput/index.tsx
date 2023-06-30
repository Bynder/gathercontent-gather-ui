import React from "react";
import PropTypes from "prop-types";
import { animated, useTransition } from "react-spring";
import Icon from "../Icon";

export function SearchInput({
  placeholder,
  onChangeHandler,
  onClearHandler,
  hideIcon,
  value,
  label,
  id,
  className,
  inputClassName,
}: any) {
  const transitionsForClearButton = useTransition(value, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <span className={`relative inline-flex items-center ${className}`}>
      {label && (
        <label className="visually-hidden" htmlFor={id}>
          {label}
        </label>
      )}
      {!hideIcon && <Icon name="search" className="absolute ml-3" />}
      <input
        value={value}
        onChange={onChangeHandler}
        className={`border border-solid border-neutral-90 focus:border-blue-primary text-base rounded m-0 w-full py-2 pr-2 pl-8 outline-none transition-colors duration-200 ${inputClassName}`}
        placeholder={placeholder}
        id={id}
      />
      {transitionsForClearButton.map(
        // @ts-expect-error TS(2339): Property 'animatedProps' does not exist on type 'U... Remove this comment to see the full error message
        ({ item, animatedProps }) =>
          item && (
            <animated.button
              type="button"
              onClick={onClearHandler}
              className="absolute right-0 mr-2 text-neutral-primary hover:bg-neutral-90 bg-transparent w-6 h-6 border-0 bg-opacity-50 rounded-full transition-colors duration-200"
              style={animatedProps}
            >
              ×
            </animated.button>
          )
      )}
    </span>
  );
}

SearchInput.defaultProps = {
  placeholder: "Search...",
  hideIcon: false,
  value: "",
  label: null,
  id: null,
  className: "",
  inputClassName: "",
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  onClearHandler: PropTypes.func.isRequired,
  hideIcon: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default SearchInput;
