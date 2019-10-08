import React from 'react';
import { arrayOf, string } from 'prop-types';

const ApprovedLabel = ({ approvedBy }) => {
  return <div>{approvedBy}</div>;
};

ApprovedLabel.propTypes = {
  approvedBy: arrayOf(string).isRequired
};

export default ApprovedLabel;
