import React, { useContext, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { TabContext } from "./Tab";
import { Tabs, TabsContext } from "./index";

export function TabNameForm({ className, tab, setActiveTab }) {
  const { setIsEditing } = useContext(TabContext);
  const { tabsLength } = useContext(TabsContext);
  const [tabName, setTabName] = useState(tab.name);

  const contentRef = useRef(null);
  const inputRef = useRef(null);
  const [inputWidth, setInputWidth] = useState(null);
  const placeholderWidth = 120;

  useEffect(() => {
    if (contentRef.current) {
      const parentWidth = contentRef.current.parentNode.offsetWidth;
      const newWidth = contentRef.current.offsetWidth;
      const newInputWidth = newWidth >= parentWidth ? parentWidth : newWidth;

      setInputWidth(`${tabName === '' ? placeholderWidth : newInputWidth}px`);
    }
  }, [tabName, tabsLength]);

  const valueWithWhitespaceUnicode = tabName.replace(/ /g, '\u00a0');

  const inputClassName = cx(
    'border-solid border-transparent border outline hover:border-neutral-90 focus:border-2 focus:border-blue-primary rounded outline-none px-2 z-10 bg-transparent'
  );

  return (
    <form
      className={className}
      onSubmit={e => {
        e.preventDefault();
        inputRef.current.blur();
      }}
    >
      <button
        type="button"
        onClick={setActiveTab}
        className="absolute w-full h-full border-0 bg-transparent outline-none"
      />
      <Tabs.TabName className="flex justify-center items-center">
        <input
          type="text"
          value={tabName}
          className={inputClassName}
          onChange={e => setTabName(e.target.value)}
          onFocus={(e) => {
            setIsEditing(true);
            setActiveTab(e);
          }}
          onBlur={() => {
            setIsEditing(false);
          }}
          style={{
            width: inputWidth
          }}
          ref={inputRef}
          placeholder="Name this tab"
        />
        <div
          ref={contentRef}
          className={`${inputClassName} invisible fixed`}
        >
          {valueWithWhitespaceUnicode}
        </div>
      </Tabs.TabName>
    </form>
  );
}