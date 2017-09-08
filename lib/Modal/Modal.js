import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import cx from 'classnames';

const ModalCustom = (props) => {
  const { size } = props;
  const classNames = cx(props.className, {
    'modal--small': size === 'small',
    'modal--large': size === 'large',
    'modal--x-large': size === 'x-large',
  });

  return (
    <Modal.Container
      {...props}
      className={classNames}
      keyboard
    >
      { props.children }
    </Modal.Container>
  );
};

ModalCustom.defaultProps = {
  size: '',
  className: '',
};

ModalCustom.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default ModalCustom;
