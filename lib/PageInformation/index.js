import React from 'react';
import PropTypes from 'prop-types';
import EditableTextWrapper from '../EditableTextWrapper';

const PageInformation = ({ title, subtitle, editable, rename }) => (
  <div className="page-information">
    {editable ? (
      <EditableTextWrapper value={title} onChange={rename}>
        <h1 className="page-information__title">{title}</h1>
      </EditableTextWrapper>
    ) : (
      <h1 className="page-information__title">{title}</h1>
    )}

    {subtitle && <div className="page-information__subtitle">{subtitle}</div>}
  </div>
);

PageInformation.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  editable: PropTypes.bool,
  rename: PropTypes.func
};

PageInformation.defaultProps = {
  subtitle: '',
  editable: false,
  rename: () => {}
};

export default PageInformation;
