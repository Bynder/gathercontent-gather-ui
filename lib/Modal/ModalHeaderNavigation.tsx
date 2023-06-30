import React, { useContext } from "react";
import { NewModal } from "lib";
import { node, string } from "prop-types";
import Navigation from "../Navigation";
import { LegacyModalContext } from "./Modal";

export function ModalHeaderNavigation({ children, title }: any) {
  const { onHide }: any = useContext(LegacyModalContext);

  return (
    <NewModal.Header
      onCloseClick={onHide}
      className="modal-header modal-header-with-nav"
    >
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
  title: string.isRequired,
};
