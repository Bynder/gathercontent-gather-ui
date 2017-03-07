import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import FontAwesomeIcon from '../FontAwesomeIcon';
import Button from '../Button';

class DropdownMenu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    direction: PropTypes.string,
    caret: PropTypes.bool,
    children: PropTypes.node.isRequired,
    shouldDisplay: PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.number,
    ]),
    alignRight: PropTypes.bool,
  };

  static defaultProps = {
    type: 'secondary',
    selected: false,
    alignRight: false,
    className: '',
    caret: false,
    direction: 'down',
    shouldDisplay: true,
  };

  static makeItems(items) {
    return items.map((item, idx) => {
      let type = item.type;

      if (typeof (type) === 'undefined') {
        type = 'button';
      }

      switch (type) {
        case 'separator':
          return (
            <li className="dropdown__separator" key={idx} />
          );

        case 'link':
          return (
            <li className="dropdown__item" key={idx}>
              <a className="dropdown__link" href={item.href}>{ item.name }</a>
            </li>
          );

        default:
          return (
            <li className="dropdown__item" key={idx}>
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

  closeDropdown(e) {
    if (this.state.selected) {
      this.setState({ selected: false });
    }
  }

  toggleItems() {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    let { items } = this.props;
    const { caret, type, shouldDisplay, alignRight } = this.props;

    const menuClass = cx({
      dropdown: true,
      'is-visible': shouldDisplay,
      'is-hidden': !shouldDisplay,
      open: this.state.selected,
      dropup: (this.props.direction === 'up'),
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

export default DropdownMenu;
