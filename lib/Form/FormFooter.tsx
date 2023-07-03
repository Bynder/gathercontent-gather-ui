import React from "react";
import PropTypes from "prop-types";

export function FormFooter({ children }: any) {
  return <footer className="form__footer">{children}</footer>
}

FormFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default FormFooter;
