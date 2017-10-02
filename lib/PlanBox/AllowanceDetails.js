import React from 'react';
import PropTypes from 'prop-types';

const PlanBoxAllowanceDetails = props => (
  <ul className="plan-box__allowance-info">
    <li>
      {props.iconElement}
      {props.plan.items} Item limit
    </li>
    <li>
      {props.iconElement}
      {props.plan.projects} Active Projects
    </li>
    <li>
      {props.iconElement}
      Unlimited users
    </li>
    <li>
      {props.iconElement}
      100GB storage
    </li>
  </ul>
);

PlanBoxAllowanceDetails.defaultProps = {
  iconElement: ''
};

PlanBoxAllowanceDetails.propTypes = {
  iconElement: PropTypes.node,
  plan: PropTypes.shape({
    items: PropTypes.number,
    projects: PropTypes.number
  }).isRequired
};

export default PlanBoxAllowanceDetails;
