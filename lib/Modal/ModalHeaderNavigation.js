import React from 'react';
import { NewModal } from 'lib';
import { node, string } from 'prop-types';
import Navigation from '../Navigation';

export function ModalHeaderNavigation({ children, title }) {
  return (
    <NewModal.Header className="flex flex-row">
      <div className="flex items-center h-16 pl-5 text-lg">
        <h4 className="modal-title">{title}</h4>
      </div>
      <Navigation
        className="flex justify-center flex-row w-full absolute border-b-0"
        tabs
      >
        {children}
      </Navigation>
    </NewModal.Header>
  );
}

ModalHeaderNavigation.propTypes = {
  children: node.isRequired,
  title: string.isRequired
};
