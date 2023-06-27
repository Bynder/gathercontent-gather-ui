import React from 'react';
import { node, oneOfType, string, bool } from 'prop-types';
import cx from 'classnames';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { NewModal } from 'lib';

const ModalFooter = ({
  children,
  text,
  spaceBetween,
  className,
  ...props
}: any) => {
  const containerClassName = cx(className, 'modal-footer', {
    'modal-footer--space-between': spaceBetween
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
  className: string
};

ModalFooter.defaultProps = {
  text: null,
  spaceBetween: false,
  className: ''
};

export default ModalFooter;
