import React, { useContext, useEffect, useRef, useState } from 'react';
import { string, func } from 'prop-types';
import cx from 'classnames';
import { TabContext } from './Tab';
import { Tabs, TabsContext } from './index';
import ShortcutTrigger from '../ShortcutTrigger';

export function TabNameForm({
  className,
  initialName,
  setActiveTab,
  submitTabForm,
  placeholder
}) {
  const {
    id,
    isEditing,
    setIsEditing,
    formInputRef,
    isActive,
    setActionsAreActive
  } = useContext(TabContext);
  const { tabsLength } = useContext(TabsContext);
  const [tabName, setTabName] = useState(initialName);
  const nameToSet = tabName.trim();

  const contentRef = useRef(null);
  const [inputWidth, setInputWidth] = useState(null);
  const placeholderWidth = 122;

  useEffect(() => {
    if (contentRef.current) {
      const padding = 1;
      const parentWidth = contentRef.current.parentNode.offsetWidth;
      const newWidth = contentRef.current.offsetWidth;
      const newInputWidth = newWidth >= parentWidth ? parentWidth : newWidth;

      setInputWidth(
        `${tabName === '' ? placeholderWidth : newInputWidth + padding}px`
      );
    }
  }, [tabName, tabsLength]);

  const valueWithWhitespaceUnicode = tabName.replace(/ /g, '\u00a0');

  const sharedClassNames = cx(
    'border-solid block rounded outline-none px-2 z-10 bg-transparent',
    {
      'border border-transparent hover:border-neutral-90': !isEditing,
      'border-2 border-blue-primary': isEditing
    }
  );

  const labelClassNames = cx(
    sharedClassNames,
    'cursor-pointer px-0 max-w-full text-center',
    {
      '-mt-8 absolute': isActive,
      'pointer-events-none': !isActive,
      'invisible fixed': isEditing
    }
  );

  const inputClassNames = cx(sharedClassNames, 'tab-name-input', {
    '-mt-8 absolute': !isActive
  });

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
        className="absolute w-full h-full border-0 bg-transparent outline-none"
      />
      <form
        className={`tab-name-form ${className}`}
        onSubmit={e => {
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
            onChange={e => setTabName(e.target.value)}
            onFocus={e => {
              setIsEditing(true);
              setActiveTab(e);
            }}
            onBlur={() => {
              submitForm();
              setActionsAreActive(false);
              setIsEditing(false);
            }}
            style={{
              width: inputWidth
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

TabNameForm.propTypes = {
  placeholder: string,
  initialName: string,
  className: string,
  setActiveTab: func.isRequired,
  submitTabForm: func.isRequired
};

TabNameForm.defaultProps = {
  placeholder: 'Name this tab',
  initialName: '',
  className: ''
};
