import React from "react";
import { Col } from "lib";
import ShortcutTrigger from "../ShortcutTrigger";
import Button from "../Button";

function SelectionBarCancel({ onCancel }: any) {
  return (
    <Col sm={3} md={3} className="selection-bar__section selection-bar__cancel">
      <Button
        title="Cancel Selection"
        types={["link-default", "collapse"]}
        clickHandler={onCancel}
      >
        Cancel (Esc)
      </Button>
      <ShortcutTrigger shortcutKey="Escape" onShortcutTrigger={onCancel} />
    </Col>
  );
}

export default SelectionBarCancel;
