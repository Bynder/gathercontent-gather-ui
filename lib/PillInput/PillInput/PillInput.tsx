import React, { useState, useEffect, useRef } from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'uuid... Remove this comment to see the full error message
import uuid from "uuid/v1";
import cx from "classnames";
import { DeleteablePill } from "../DeleteablePill";
import { useKeyDownHandlers } from "./useKeyDownHandlers";

function PillInput({
  className,
  checker,
  placeholder,
  onPillsChange,
  initialPills,
  ...rest
}: any) {
  const checkPill = (pillName: any) => !checker || checker.regex.test(pillName);
  const initialPillsValidated = initialPills.map((pill: any) => ({
    ...pill,
    isValid: checkPill(pill.name),
  }));

  const [isFocused, setIsFocused] = useState(false);
  const [pills, setPills] = useState(initialPillsValidated);
  const [inputValue, setInputValue] = useState("");

  const addPills = (pillNames: any) => {
    const pillsToAdd = pillNames.reduce((acc: any, pillName: any) => {
      if (!pillName) {
        return acc;
      }

      const isValid = checkPill(pillName);
      return [...acc, { name: pillName, id: uuid(), isValid }];
    }, []);

    setPills([...pills, ...pillsToAdd]);
  };

  const removePill = (id: any) => {
    const newPills = pills.filter((pill: any) => pill.id !== id);
    setPills(newPills);
  };

  const removeLastPill = () => {
    const newPills = pills.slice(0, pills.length - 1);
    setPills(newPills);
  };

  const onChange = (value: any) => {
    const pillNamesFromValue = value.split(" ");
    const numberOfPillNames = pillNamesFromValue.length;

    if (numberOfPillNames === 1) {
      return setInputValue(value);
    }

    const lastPillNameIndex = numberOfPillNames - 1;

    const pillNamesToAdd = pillNamesFromValue.slice(0, lastPillNameIndex);
    addPills(pillNamesToAdd);

    const newValue = pillNamesFromValue.slice(lastPillNameIndex)[0];
    return setInputValue(newValue);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    addPills([inputValue]);
    setInputValue("");
    setIsFocused(false);
  };

  const containerClassName = cx(
    `${className} pill-input__container form__input h-padding-quarter h-padding-bottom-clear`,
    {
      "pill-input--focused": isFocused,
    }
  );

  useEffect(() => {
    onPillsChange(pills);
  }, [pills]);

  const inputRef = useRef(null);

  useKeyDownHandlers({
    pills,
    addPills,
    removeLastPill,
    inputValue,
    setInputValue,
    inputRef,
  });

  return (
    <div className={containerClassName}>
      {pills.map(({ id, name, isValid }: any) => (
        <DeleteablePill
          key={id}
          id={id}
          name={name}
          onRemove={() => removePill(id)}
          warning={isValid ? null : checker.warning}
        />
      ))}
      <input
        {...rest}
        ref={inputRef}
        placeholder={!pills.length ? placeholder : ""}
        className="pill-input__input h-margin-bottom-quarter h-margin-right-quarter h-padding-bottom-quarter h-padding-top-quarter h-padding-left-quarter h-padding-right-quarter"
        value={inputValue}
        onChange={({ target: { value } }) => onChange(value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}

PillInput.defaultProps = {
  className: "",
  checker: null,
  placeholder: "",
  onPillsChange: () => {},
  initialPills: [],
};

export { PillInput };
