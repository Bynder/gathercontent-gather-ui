import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHeadingTitle from './Title';
import TableColumn from '../Column';
import Icon from '../../FontAwesomeIcon';

class TableHeading extends Component {
  constructor() {
    super();

    this.callToggleAllHandler = this.callToggleAllHandler.bind(this);
    this.sortingOrderIsDescending = this.sortingOrderIsDescending.bind(this);
    this.sortingColumnIsActive = this.sortingColumnIsActive.bind(this);
  }

  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    sortingOrder: PropTypes.number.isRequired,
    toggleHandler: PropTypes.func.isRequired,
    sortHandler: PropTypes.func.isRequired,
    activeSortingProp: PropTypes.string,
    columnNameSanitiser: PropTypes.func.isRequired
  };

  static defaultProps = {
    activeSortingProp: ''
  };

  callToggleAllHandler() {
    this.props.toggleHandler(this.toggleAll.checked);
  }

  makeSortingColumns() {
    return this.props.columns.map(column => {
      const sanitisedColumnName = this.props.columnNameSanitiser(column);
      const isActive = this.sortingColumnIsActive(sanitisedColumnName);

      let childClassName = isActive ? 'is-active' : '';
      const columnClassName = `table-heading--${sanitisedColumnName}`;
      let icon = <Icon className="table-heading__icon" name="fa-sort-desc" />;

      if (isActive && this.sortingOrderIsDescending()) {
        childClassName = `${childClassName} is-reversed`;
        icon = <Icon className="table-heading__icon" name="fa-sort-asc" />;
      }

      return (
        <TableColumn key={sanitisedColumnName} className={columnClassName}>
          <TableHeadingTitle
            className={childClassName}
            column={column}
            sortHandler={this.props.sortHandler}
          >
            {column}
            {icon}
          </TableHeadingTitle>
        </TableColumn>
      );
    });
  }

  sortingOrderIsDescending() {
    return this.props.sortingOrder === -1;
  }

  sortingColumnIsActive(columnText) {
    return columnText === this.props.activeSortingProp;
  }

  makeCheckToggleAllColumn() {
    return (
      <TableColumn className="table-heading__checkbox">
        <input
          className="table-heading__checkbox__input"
          type="checkbox"
          ref={input => {
            this.toggleAll = input;
          }}
          onClick={this.callToggleAllHandler}
        />
      </TableColumn>
    );
  }

  render() {
    const checkToggleAllColumn = this.makeCheckToggleAllColumn();
    const sortingColumns = this.makeSortingColumns();

    return (
      <div className="c-table">
        <div className="table-heading">
          {checkToggleAllColumn}
          {sortingColumns}
        </div>
      </div>
    );
  }
}

export default TableHeading;
