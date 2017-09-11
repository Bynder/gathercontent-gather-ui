import React from 'react';
import PropTypes from 'prop-types';
import BootstrapModal from 'react-bootstrap/lib/Modal';
import cx from 'classnames';

const Modal = (props) => {
  const { size } = props;
  const classNames = cx(props.className, {
    'modal--small': size === 'small',
    'modal--large': size === 'large',
    'modal--x-large': size === 'x-large',
  });

  return (
    <BootstrapModal
      {...props}
      className={classNames}
      keyboard
    >
      { props.children }
    </BootstrapModal>
  );
};

Modal.defaultProps = {
  size: '',
  className: '',
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Modal;
