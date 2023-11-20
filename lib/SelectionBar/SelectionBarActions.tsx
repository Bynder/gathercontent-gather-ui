import React from "react";
import { Col } from "lib";

function SelectionBarActions({ children }: any) {
  return (
    <Col
      xs={12}
      sm={5}
      md={6}
      className="gui-selection-bar__section gui-selection-bar__actions"
    >
      {children}
    </Col>
  );
}

export default SelectionBarActions;
