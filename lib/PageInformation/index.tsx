import React from "react";
import { EditableTextWrapper } from "lib";

export function PageInformation({
  title,
  subtitle,
  editable,
  rename,
  contextName,
  inputLabel,
}: any) {
  return (
    <div className="page-information">
      {editable ? (
        <EditableTextWrapper
          value={title}
          onChange={rename}
          title={`Rename ${contextName}`}
          className="page-information__editable"
          inputLabel={inputLabel || `Rename ${contextName}`}
        >
          <h1 className="page-information__title" title={title}>
            {title}
          </h1>
        </EditableTextWrapper>
      ) : (
        <h1 className="page-information__title" title={title}>
          {title}
        </h1>
      )}

      {subtitle && <div className="page-information__subtitle">{subtitle}</div>}
    </div>
  );
}

PageInformation.defaultProps = {
  subtitle: "",
  editable: false,
  rename: () => {},
  contextName: "",
  inputLabel: "",
};

export default PageInformation;
