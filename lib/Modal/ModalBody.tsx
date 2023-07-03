import React from "react";
import PropTypes from "prop-types";
import { NewModal } from "lib";

function ModalBody({ children, className, ...rest }: any) {
  return <NewModal.Body className={`modal-body ${className}`} {...rest}>
    {children}
  </NewModal.Body>
}

ModalBody.defaultProps = {
  className: "",
};

ModalBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string,
};

export default ModalBody;
