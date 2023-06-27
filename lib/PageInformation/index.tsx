import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { EditableTextWrapper } from 'lib';

const PageInformation = ({
  title,
  subtitle,
  editable,
  rename,
  contextName,
  inputLabel
}: any) => (
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

PageInformation.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  editable: PropTypes.bool,
  rename: PropTypes.func,
  contextName: PropTypes.string,
  inputLabel: PropTypes.string
};

PageInformation.defaultProps = {
  subtitle: '',
  editable: false,
  rename: () => {},
  contextName: '',
  inputLabel: ''
};

export default PageInformation;
