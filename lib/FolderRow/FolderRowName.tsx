import React from "react";
import Button from "../Button";
import Icon from "../Icon";

function FolderRowName({
  children,
  showToggle,
  show,
  setShow,
  handleOnClick,
  toggleTitle,
  ...rest
}: any) {
  return (
    <div className="gui-folder-row__name" {...rest}>
      {showToggle && (
        <div className="gui-folder-row__toggle gui-h-margin-clear gui-h-margin-right-half">
          <Button
            types={["icon-only"]}
            onClick={() => {
              setShow(!show);
              handleOnClick();
            }}
            title={toggleTitle}
          >
            <Icon name="caret" />
          </Button>
        </div>
      )}
      <Icon
        name={show ? "folderOpen" : "folder"}
        className="gui-h-margin-right-half"
      />
      <div className="text-overflow-ellipsis gui-h-margin-clear gui-h-width-100">
        {children}
      </div>
    </div>
  );
}

FolderRowName.defaultProps = {
  showToggle: true,
  toggleTitle: "toggle the contents",
  handleOnClick: () => {},
};

export { FolderRowName };
