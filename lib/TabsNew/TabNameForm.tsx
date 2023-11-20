import React, { useContext, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { TabContext } from "./Tab";
import { Tabs, TabsContext } from "./index";
import ShortcutTrigger from "../ShortcutTrigger";

export function TabNameForm({
  className,
  initialName,
  setActiveTab,
  submitTabForm,
  placeholder,
}: any) {
  const {
    id,
    isEditing,
    setIsEditing,
    formInputRef,
    isActive,
    setActionsAreActive,
  }: any = useContext(TabContext);
  const { tabsLength }: any = useContext(TabsContext);
  const [tabName, setTabName] = useState(initialName);
  const nameToSet = tabName.trim();

  const contentRef = useRef(null);
  const [inputWidth, setInputWidth] = useState(null);
  const placeholderWidth = 122;

  useEffect(() => {
    if (contentRef.current) {
      const padding = 1;
      // @ts-expect-error TS(2339): Property 'parentNode' does not exist on type 'neve... Remove this comment to see the full error message
      const parentWidth = contentRef.current.parentNode.offsetWidth;
      // @ts-expect-error TS(2339): Property 'offsetWidth' does not exist on type 'nev... Remove this comment to see the full error message
      const newWidth = contentRef.current.offsetWidth;
      const newInputWidth = newWidth >= parentWidth ? parentWidth : newWidth;

      setInputWidth(
        // @ts-expect-error TS(2345): Argument of type 'string' is not assignable to par... Remove this comment to see the full error message
        `${tabName === "" ? placeholderWidth : newInputWidth + padding}px`
      );
    }
  }, [tabName, tabsLength]);

  const valueWithWhitespaceUnicode = tabName.replace(/ /g, "\u00a0");

  const sharedClassNames = cx(
    "border-solid block rounded outline-none px-2 z-10 bg-transparent",
    {
      "border border-transparent hover:border-neutral-90": !isEditing,
      "border-2 border-blue-primary z-50": isEditing,
    }
  );

  const labelClassNames = cx(
    sharedClassNames,
    "cursor-pointer max-w-full text-center",
    {
      "-mt-32 absolute": isActive,
      "pointer-events-none": !isActive,
      "invisible fixed": isEditing,
    }
  );

  const inputClassNames = cx(sharedClassNames, "tab-name-input", {
    "-mt-32 absolute": !isActive,
  });

  const surroundButtonClassNames = cx(
    "absolute w-full h-full border-0 bg-transparent outline-none",
    {
      "focus:bg-neutral-90": !isActive,
    }
  );

  const resetTabForm = () => {
    setTabName(initialName);

    if (nameToSet === initialName) {
      formInputRef.current.blur();
    }
  };

  const submitForm = () => {
    if (!nameToSet) {
      return resetTabForm();
    }

    if (nameToSet === initialName) {
      return null;
    }

    return submitTabForm(tabName);
  };

  return (
    <>
      <button
        type="button"
        onClick={setActiveTab}
        tabIndex={isActive ? -1 : 0}
        className={surroundButtonClassNames}
      />
      <form
        className={`gui-tab-name-form ${className}`}
        onSubmit={(e) => {
          e.preventDefault();
          formInputRef.current.blur();
        }}
      >
        <Tabs.TabName className="flex justify-center items-center">
          <label htmlFor={id} ref={contentRef} className={labelClassNames}>
            {valueWithWhitespaceUnicode || placeholder}
          </label>
          <input
            id={id}
            type="text"
            value={tabName}
            className={inputClassNames}
            tabIndex={isActive ? 0 : -1}
            onChange={(e) => setTabName(e.target.value)}
            onFocus={(e) => {
              setIsEditing(true);
              setActiveTab(e);
            }}
            onBlur={() => {
              submitForm();
              setActionsAreActive(false);
              setIsEditing(false);
            }}
            style={{
              // @ts-expect-error TS(2322): Type 'null' is not assignable to type 'Width<strin... Remove this comment to see the full error message
              width: inputWidth,
            }}
            ref={formInputRef}
            placeholder={placeholder}
          />
        </Tabs.TabName>
        <ShortcutTrigger
          shortcutKey="Escape"
          onShortcutTrigger={resetTabForm}
        />
      </form>
    </>
  );
}

TabNameForm.defaultProps = {
  placeholder: "Name this tab",
  initialName: "",
  className: "",
};
