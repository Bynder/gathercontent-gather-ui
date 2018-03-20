import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';
import Icon from '../Icon';
import AvatarWithInformation from '../Avatar/AvatarWithInformation';

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
    alignRight: PropTypes.bool,
    selected: PropTypes.bool,
    downIcon: PropTypes.bool,
    fullWidth: PropTypes.bool
  };

  static defaultProps = {
    type: 'primary',
    selected: false,
    alignRight: false,
    className: '',
    listClassName: '',
    caret: false,
    downIcon: false,
    direction: 'down',
    shouldDisplay: true,
    fullWidth: false
  };

  static makeItems(items) {
    return items.map((item, idx) => {
      let type = item.type;
      const idKey = `id-${idx}`;

      if (typeof type === 'undefined') {
        type = 'button';
      }

      const activeContents = (
        <span className="dropdown-item__tick is-active">
          <Icon name="tick" size="micro" />
        </span>
      );

      const classes = cx('dropdown__item', `dropdown__item--${item.linkType}`);

      switch (type) {
        case 'separator':
          return <li className="dropdown__separator" key={idKey} />;

        case 'link':
          return (
            <li className={classes} key={idKey}>
              {item.active && activeContents}
              <a className="dropdown__link" href={item.href}>
                {item.name}
              </a>
            </li>
          );

        case 'withAdditional':
          return (
            <li className={classes} key={idKey}>
              <button
                className="dropdown__link dropdown__additional"
                onClick={item.action}
              >
                {item.active && activeContents}
                <span className="dropdown__item--name">{item.name}</span>
                {item.additional && (
                  <span className="dropdown__item--additional">
                    {item.additional}
                  </span>
                )}
              </button>
            </li>
          );

        case 'avatar':
          return (
            <li className={classes} key={idKey}>
              <button
                className="dropdown__link dropdown__avatar"
                onClick={item.action}
              >
                <AvatarWithInformation
                  name={item.name}
                  url={item.url}
                  initials={item.initals}
                  email={item.email}
                />
              </button>
            </li>
          );

        case 'title':
          return (
            <li className={classes} key={idKey}>
              <button className="dropdown__link dropdown__title" onClick={item.action}>
                <span className="dropdown__item--name">{item.name}</span>
                {item.additional && (
                  <span className="dropdown__item--additional">
                    {item.additional}
                  </span>
                )}
              </button>
            </li>
          );

        default:
          return (
            <li className={classes} key={idKey}>
              <button className="dropdown__link" onClick={item.action}>
                {item.active && activeContents}
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

    this.state = { selected: this.props.selected };
  }

  componentWillMount() {
    document.body.addEventListener('click', this.closeDropdown);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.closeDropdown);
  }

  closeDropdown(e) {
    let isTargetDropDownButton = false;
    if (e.target.classList) {
      isTargetDropDownButton = e.target.classList.contains(
        'dropdown-menu__button'
      );
    }
    if (this.state.selected && !isTargetDropDownButton) {
      this.setState({ selected: false });
    }
  }

  toggleItems() {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    let { items } = this.props;
    const {
      caret,
      downIcon,
      type,
      shouldDisplay,
      alignRight,
      className,
      listClassName,
      fullWidth
    } = this.props;

    const menuClass = cx(`dropdown ${className}`, {
      'is-visible': shouldDisplay,
      'is-hidden': !shouldDisplay,
      'open is-active': this.state.selected,
      dropup: this.props.direction === 'up',
      'full-width': fullWidth
    });

    const listClass = cx(`dropdown-menu ${listClassName}`, {
      'align-right': alignRight
    });

    items = DropdownMenu.makeItems(items);

    return (
      <div className={menuClass}>
        <Button
          types={[type]}
          className={`dropdown-menu__button dropdown-menu__button--${[type]}`}
          clickHandler={this.toggleItems}
        >
          {this.props.children}
          {caret && (
            <span className="dropdown-menu__caret">
              <Icon name="caret" size="micro" />
            </span>
          )}
          {downIcon && (
            <span className="dropdown-menu__down">
              <Icon name="down" size="micro" />
            </span>
          )}
        </Button>

        <ul className={listClass}>{items}</ul>
      </div>
    );
  }
}

export default DropdownMenu;
