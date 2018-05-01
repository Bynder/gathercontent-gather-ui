import React from 'react';
import PropTypes from 'prop-types';
import BootstrapModal from 'react-bootstrap/lib/Modal';
import cx from 'classnames';

const Modal = props => {
  const { size } = props;
  const classNames = cx(props.className, {
    'modal--small': size === 'small',
    'modal--large': size === 'large',
    'modal--x-large': size === 'x-large',
    'modal--overflow': props.overflow
  });

  return (
    <BootstrapModal {...props} className={classNames}>
      {props.children}
    </BootstrapModal>
  );
};

Modal.defaultProps = {
  size: '',
  className: '',
  keyboard: true,
  overflow: false
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  overflow: PropTypes.bool
};

export default Modal;
