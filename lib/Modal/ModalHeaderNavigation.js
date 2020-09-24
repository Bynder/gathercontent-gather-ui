import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import { node, string } from 'prop-types';
import Navigation from '../Navigation';

export function ModalHeaderNavigation({ children, title }) {
  return (
    <Modal.Header className="flex flex-row">
      <div className="flex items-center h-16 pl-5 text-lg">
        <Modal.Title>{title}</Modal.Title>
      </div>
      <Navigation tabs>{children}</Navigation>
    </Modal.Header>
  );
}

ModalHeaderNavigation.propTypes = {
  children: node.isRequired,
  title: string.isRequired
};
