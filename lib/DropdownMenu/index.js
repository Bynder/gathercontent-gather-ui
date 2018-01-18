import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';
import Icon from '../Icon';

class DropdownMenu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string,
    listClassName: PropTypes.string,
    type: PropTypes.string,
    direction: PropTypes.string,
    caret: PropTypes.bool,
    children: PropTypes.node.isRequired,
    shouldDisplay: PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.number
    ]),
    alignRight: PropTypes.bool
  };

  static defaultProps = {
    type: 'secondary',
    selected: false,
    alignRight: false,
    className: '',
    listClassName: '',
    caret: false,
    direction: 'down',
    shouldDisplay: true
  };

  static makeItems(items) {
    return items.map((item, idx) => {
      let type = item.type;
      const idKey = `id-${idx}`;

      if (typeof type === 'undefined') {
        type = 'button';
      }

      switch (type) {
        case 'separator':
          return <li className="dropdown__separator" key={idKey} />;

        case 'link':
          return (
            <li className="dropdown__item" key={idKey}>
              <a className="dropdown__link" href={item.href}>
                {item.name}
              </a>
            </li>
          );

        default:
          return (
            <li className="dropdown__item" key={idKey}>
              <button className="dropdown__link" onClick={item.action}>
                {item.name}
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
    const { caret, type, shouldDisplay, alignRight, className, listClassName } = this.props;

    const menuClass = cx(`dropdown ${className}`, {
      'is-visible': shouldDisplay,
      'is-hidden': !shouldDisplay,
      'open is-active': this.state.selected,
      dropup: this.props.direction === 'up'
    });

    const listClass = cx(`dropdown-menu ${listClassName}`, {
      'align-right': alignRight
    });

    items = DropdownMenu.makeItems(items);

    return (
      <div className={menuClass}>
        <Button
          types={[type]}
          className="dropdown-menu__button"
          clickHandler={this.toggleItems}
        >
          {this.props.children}
          {caret && (
            <span className="dropdown-menu__caret">
              <Icon name="caret" size="micro" />
            </span>
          )}
        </Button>

        <ul className={listClass}>{items}</ul>
      </div>
    );
  }
}

export default DropdownMenu;
