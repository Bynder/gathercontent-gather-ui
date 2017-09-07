import React from 'react';
import PropTypes from 'prop-types';

const PageInformation = ({ title, subtitle }) => (
  <div className="page-information">
    <h1 className="page-information__title">{title}</h1>

    { subtitle &&
      <div className="page-information__subtitle">
        { subtitle }
      </div>
    }
  </div>
);

PageInformation.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

PageInformation.defaultProps = {
  subtitle: '',
};

export default PageInformation;
