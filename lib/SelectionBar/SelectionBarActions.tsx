import React from "react";
import { Col } from "lib";

function SelectionBarActions({ children }: any) {
  return (
    <Col
      xs={12}
      sm={5}
      md={6}
      className="selection-bar__section selection-bar__actions"
    >
      {children}
    </Col>
  );
}

export default SelectionBarActions;
