import React from 'react';
import ReactModal from 'react-modal';
import cx from 'classnames';

export function Modal({
  size,
  highlight,
  overflow,
  overflowHalf,
  mediaOnly,
  collapse,
  children,
  ...rest
}) {
  const classNames = cx(props.className, {
    'modal--small': size === 'small',
    'modal--large': size === 'large',
    'modal--x-large': size === 'x-large',
    'modal--full-screen': size === 'full-screen',
    'modal--highlight': highlight,
    'modal--overflow': overflow,
    'modal--overflow-half': overflowHalf,
    'modal--media-only': mediaOnly,
    'modal--collapse': collapse
  });

  return <ReactModal isOpen>{children}</ReactModal>;
}
