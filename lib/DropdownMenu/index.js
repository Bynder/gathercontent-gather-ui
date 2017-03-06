import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import FontAwesomeIcon from '../FontAwesomeIcon';
import Button from '../Button';

class DropdownMenu extends Component {
  static handleBodyClick(e) {
    e.stopPropagation();
  }

  static makeItems(items) {
    return items.map((item, index) => {
      let type = item.type;

      if (typeof (type) === 'undefined') {
        type = 'button';
      }

      switch (type) {
        case 'separator':
          return (
            <li className="dropdown__separator" key={index} />
          );

        case 'link':
          return (
            <li className="dropdown__item" key={index}>
              <a className="dropdown__link" href={item.href}>{ item.name }</a>
            </li>
          );

        default:
          return (
            <li className="dropdown__item" key={index}>
              <button className="dropdown__link" onClick={item.action}>
                { item.name }
              </button>
            </li>
          );
      }
    });
  }

  constructor(props) {
    super(props);
    this.toggleItems = this.toggleItems.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);

    this.state = { selected: false };
  }

  componentWillMount() {
    document.body.addEventListener('click', this.closeDropdown);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.closeDropdown);
  }

  closeDropdown() {
    if (this.state.selected) {
      this.setState({ selected: false });
    }
  }

  toggleItems() {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    let { items } = this.props;
    const { value, caret, type, shouldDisplay, alignRight } = this.props;

    const menuClass = cx({
      'dropdown': true,
      'is-visible': shouldDisplay,
      'is-hidden': !shouldDisplay,
      'open': this.state.selected,
      'dropup': (this.props.direction === 'up'),
    }).concat(` ${this.props.className}`);

    const listClass = cx({
      'dropdown-menu': true,
      'align-right': alignRight,
    });

    items = DropdownMenu.makeItems(items);

    return (
      <div className={menuClass}>
        <Button types={[type]} className="btn--dropdown" clickHandler={this.toggleItems}>
          { this.props.children }
          { caret && <FontAwesomeIcon className="dropdown-menu__caret" name="fa-caret-down" /> }
        </Button>

        <ul className={listClass}>
          { items }
        </ul>
      </div>
    );
  }
}

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  direction: PropTypes.string,
  caret: PropTypes.bool,
  children: PropTypes.node,
  shouldDisplay: PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number,
  ]),
  alignRight: PropTypes.bool,
};

DropdownMenu.defaultProps = {
  type: 'secondary',
  selected: false,
  alignRight: false,
  className: '',
  caret: false,
  direction: 'down',
};

export default DropdownMenu;
