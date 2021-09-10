import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import List from './index';
import Button from '../Button';
import Icon from '../Icon';

class ListItem extends Component {
  constructor(props) {
    super();
    this.state = {
      showSubList: props.showSubList || ListItem.defaultProps.showSubList
    };
  }

  static propTypes = {
    action: PropTypes.node,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]),
    isCurrent: PropTypes.bool,
    showSubList: PropTypes.bool,
    onToggle: PropTypes.func,
    id: PropTypes.string,
    collapse: PropTypes.bool
  };

  static defaultProps = {
    id: '',
    action: null,
    children: null,
    isCurrent: false,
    collapse: false,
    showSubList: false,
    onToggle: () => {}
  };

  toggleSubList = () => {
    this.props.onToggle(this.props.id);
    return this.setState(prevState => ({
      showSubList: !prevState.showSubList
    }));
  };

  render() {
    const { children, isCurrent, action, collapse } = this.props;

    const classNames = cx('list__item', {
      'list__item--collapse': collapse,
      'is-current': isCurrent,
      'show-sub-list': this.state.showSubList,
      'has-action': action
    });

    const toggleClassNames = cx('list__button', {
      'is-active': this.state.showSubList
    });

    const filteredChildren = React.Children.map(children, child => {
      if (typeof child === 'string') {
        return child;
      }

      if (child && child.type !== List) {
        return React.cloneElement(child);
      }

      return null;
    });

    const subListChildren = React.Children.map(children, child => {
      if (child && child.type === List) {
        return React.cloneElement(child);
      }

      return null;
    });

    const hasSubList = subListChildren ? subListChildren.length > 0 : false;

    return (
      <div className={classNames}>
        <div className="list__item-content">
          <div className="list__item-text">{filteredChildren}</div>

          <span className="list__actions">
            {action && <span className="list__action">{action}</span>}

            {hasSubList && (
              <span className="list__action list__toggle">
                <Button
                  className={toggleClassNames}
                  types={['icon-only', 'icon-only-cover']}
                  clickHandler={this.toggleSubList}
                >
                  <Icon name="caret" size="micro" />
                </Button>
              </span>
            )}
          </span>
        </div>

        {subListChildren}
      </div>
    );
  }
}

export default ListItem;
