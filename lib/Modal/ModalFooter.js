import React from 'react';
import { node, oneOfType, string, bool } from 'prop-types';
import cx from 'classnames';
import { NewModal } from 'lib';

const ModalFooter = ({ children, text, spaceBetween, className, flexEnd, ...props }) => {
  const containerClassName = cx(className, 'modal-footer flex border-0 border-t border-solid border-neutral-90 p-4', {
    'modal-footer--space-between': spaceBetween,
    'items-end': flexEnd
  });

  return (
    <NewModal.Footer className={containerClassName} {...props}>
      {text && <span className="modal__footer-text">{text}</span>}

      {children}
    </NewModal.Footer>
  );
};

ModalFooter.propTypes = {
  children: node.isRequired,
  text: oneOfType([string, node]),
  spaceBetween: bool,
  flexEnd: bool,
  className: string
};

ModalFooter.defaultProps = {
  text: null,
  spaceBetween: false,
  className: '',
  flexEnd: true
};

export default ModalFooter;
