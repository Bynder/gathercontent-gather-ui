import React from 'react';
import PropTypes from 'prop-types';
import BootstrapModal from 'react-bootstrap/lib/Modal';
import cx from 'classnames';

const Modal = props => {
  const { size, highlight, overflow, ...rest } = props;
  const classNames = cx(props.className, {
    'modal--small': size === 'small',
    'modal--large': size === 'large',
    'modal--x-large': size === 'x-large',
    'modal--full-screen': size === 'full-screen',
    'modal--highlight': highlight,
    'modal--overflow': overflow
  });

  return (
    <BootstrapModal {...rest} className={classNames}>
      {props.children}
    </BootstrapModal>
  );
};

Modal.defaultProps = {
  size: '',
  className: '',
  overflow: false,
  highlight: false
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  overflow: PropTypes.bool,
  highlight: PropTypes.bool
};

export default Modal;
