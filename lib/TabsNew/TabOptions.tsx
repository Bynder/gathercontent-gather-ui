import React, { useContext } from "react";
import cx from "classnames";
import { ButtonIcon } from "lib";
import Dropdown from "../Dropdown";
import { TabContext } from "./Tab";

function TabOptions({ children }: any) {
  const { isActive, actionsAreActive, setActionsAreActive }: any =
    useContext(TabContext);

  const dropdownClassNames = cx(
    "tab-dropdown overflow-visible items-center flex",
    {
      "hidden group-hover:flex": !isActive && !actionsAreActive,
    }
  );

  const iconClassNames = cx("bg-transparent hover:bg-neutral-95");

  const createTriggerWrapperClassNames = (showContent: any) =>
    cx("tab-dropdown-trigger h-6 w-6 items-center justify-center", {
      flex: isActive || showContent,
      "hidden group-hover:flex": !isActive && !showContent,
      "group-hover:bg-neutral-90": !isActive,
      "bg-neutral-90": actionsAreActive,
    });

  return (
    <Dropdown
      className={dropdownClassNames}
      id="tab-options"
      onHide={() => setActionsAreActive(false)}
      autoPosition
    >
      {({ showContent }: any) => (
        <>
          <div className={createTriggerWrapperClassNames(showContent)}>
            <Dropdown.Trigger>
              {({ toggleShowContent }: any) => (
                <ButtonIcon
                  name="cog16"
                  tabIndex={0}
                  onClick={() => {
                    toggleShowContent();
                    setActionsAreActive(!showContent);
                  }}
                  size={ButtonIcon.sizes.sm}
                  className={iconClassNames}
                  active={showContent}
                />
              )}
            </Dropdown.Trigger>
          </div>

          <Dropdown.Content autoPositionLeft collapse>
            {children}
          </Dropdown.Content>
        </>
      )}
    </Dropdown>
  );
}

export { TabOptions };
