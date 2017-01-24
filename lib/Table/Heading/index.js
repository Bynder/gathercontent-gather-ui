import React, { Component, PropTypes } from 'react';
import TableHeadingTitle from './Title';
import Column from '../Column';
import Icon from '../../FontAwesomeIcon';

class TableHeading extends Component {
  constructor() {
    super();

    this.callToggleAllHandler = this.callToggleAllHandler.bind(this);
    this.sortingOrderIsDescending = this.sortingOrderIsDescending.bind(this);
    this.sortingColumnIsActive = this.sortingColumnIsActive.bind(this);
  }

  callToggleAllHandler() {
    this.props.toggleHandler(this.toggleAll.checked);
  }

  makeSortingColumns() {
    return this.props.columns.map((column, idx) => {
      const sanitisedColumnName = this.props.columnNameSanitiser(column);
      const isActive = this.sortingColumnIsActive(sanitisedColumnName);

      let childClassName = (isActive) ? 'is-active' : '';
      const columnClassName = `table-heading--${sanitisedColumnName}`;
      let icon = <Icon className="table-heading__icon" name="fa-sort-desc" />;

      if (isActive && this.sortingOrderIsDescending()) {
        childClassName = `${childClassName} is-reversed`;
        icon = <Icon className="table-heading__icon" name="fa-sort-asc" />;
      }

      return (
        <Column
          key={idx}
          className={columnClassName}
        >
          <TableHeadingTitle
            className={childClassName}
            column={column}
            sortHandler={this.props.sortHandler}
          >
            { column }
            { icon }
          </TableHeadingTitle>
        </Column>
      );
    });
  }

  sortingOrderIsDescending() {
    return (this.props.sortingOrder === -1);
  }

  sortingColumnIsActive(columnText) {
    return (columnText === this.props.activeSortingProp);
  }

  makeCheckToggleAllColumn() {
    return (
      <Column className="table-item__checkbox">
        <input
          type="checkbox"
          ref={input => (this.toggleAll = input)}
          onClick={this.callToggleAllHandler}
        />
      </Column>
    );
  }

  render() {
    const checkToggleAllColumn = this.makeCheckToggleAllColumn();
    const sortingColumns = this.makeSortingColumns();

    return (
      <div className="c-table">
        <div className="table-heading">
          { checkToggleAllColumn }
          { sortingColumns }
        </div>
      </div>
    );
  }
}

TableHeading.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  sortingOrder: PropTypes.number,
  toggleHandler: PropTypes.func,
  sortHandler: PropTypes.func,
  activeSortingProp: PropTypes.string,
  columnNameSanitiser: PropTypes.func.isRequired,
};

export default TableHeading;
