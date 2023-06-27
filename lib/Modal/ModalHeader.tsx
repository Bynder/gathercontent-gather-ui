import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { NewModal } from 'lib';
import { LegacyModalContext } from './Modal';

const ModalHeader = ({
  children,
  text,
  ...rest
}: any) => {
  // @ts-expect-error TS(2339): Property 'onHide' does not exist on type '{}'.
  const { onHide } = useContext(LegacyModalContext);

  return (
    <NewModal.Header
      onCloseClick={onHide}
      headerText={children}
      className="modal-header"
      {...rest}
    >
      {text && <p className="modal__header-intro">{text}</p>}
    </NewModal.Header>
  );
};

ModalHeader.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string
};

ModalHeader.defaultProps = {
  children: null,
  text: null
};

export default ModalHeader;
