import React from 'react';

const PlanBoxWrapper = props =>
  <div className={`plan-box__wrapper plan-box__wrapper--highlight-all ${props.className}`}>
    <div className={`grid ${props.gridClassName}`}>
      { React.Children.map(props.children, child =>
        <div className={`grid__cell grid__cell--1-3 ${props.gridCellClassName}`}>
          { child }
        </div>
      ) }
    </div>
  </div>;

export default PlanBoxWrapper;
