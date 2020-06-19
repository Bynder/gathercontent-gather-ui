import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  Fragment
} from 'react';
import { string, func } from 'prop-types';
import cx from 'classnames';
import { TabContext } from './Tab';
import { Tabs, TabsContext } from './index';
import ShortcutTrigger from '../ShortcutTrigger';

export function TabNameForm({
  className,
  initialName,
  setActiveTab,
  submitTabForm
}) {
  const { setIsEditing, formInputRef } = useContext(TabContext);
  const { tabsLength } = useContext(TabsContext);
  const [tabName, setTabName] = useState(initialName);
  const nameToSet = tabName.trim();

  const contentRef = useRef(null);
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
    <Fragment>
      <button
        type="button"
        onClick={setActiveTab}
        className="absolute w-full h-full border-0 bg-transparent outline-none"
      />
      <form
        className={`${className} px-0`}
        onSubmit={e => {
          e.preventDefault();
          formInputRef.current.blur();
        }}
      >
        <Tabs.TabName className="flex justify-center items-center px-2">
          <input
            type="text"
            value={tabName}
            className={inputClassName}
            onChange={e => setTabName(e.target.value)}
            onFocus={e => {
              setIsEditing(true);
              setActiveTab(e);
            }}
            onBlur={() => {
              submitForm();
              setIsEditing(false);
            }}
            style={{
              width: inputWidth
            }}
            ref={formInputRef}
            placeholder="Name this tab"
          />
          <div ref={contentRef} className={`${inputClassName} invisible fixed`}>
            {valueWithWhitespaceUnicode}
          </div>
        </Tabs.TabName>
        <ShortcutTrigger
          shortcutKey="Escape"
          onShortcutTrigger={resetTabForm}
        />
      </form>
    </Fragment>
  );
}

TabNameForm.propTypes = {
  initialName: string,
  className: string,
  setActiveTab: func.isRequired,
  submitTabForm: func.isRequired
};

TabNameForm.defaultProps = {
  initialName: '',
  className: ''
};
