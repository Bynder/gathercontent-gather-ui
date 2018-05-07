import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import List from './index';
import Button from '../Button';
import Icon from '../Icon';
import { childrenContainsComponent } from '../helpers';

class ListItem extends Component {
  static propTypes = {
    action: PropTypes.node,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]),
    isCurrent: PropTypes.bool
  };

  static defaultProps = {
    action: null,
    children: null,
    isCurrent: false
  };

  state = { showSubList: false };

  toggleSubList = () => this.setState({ showSubList: !this.state.showSubList });

  render() {
    const { children, isCurrent, action } = this.props;
    const childrenContainsList = childrenContainsComponent(children, List);

    const classNames = cx({
      'is-current': isCurrent,
      'has-action': action,
      'has-actions': action && childrenContainsList
    });

    const contentClassNames = cx('list__item-content', {
      'show-sub-list': this.state.showSubList
    });

    const toggleClassNames = cx('list__button', {
      'is-active': this.state.showSubList
    });

    return (
      <div className={`list__item ${classNames}`}>
        <div className={contentClassNames}>
          {children}

          <span className="list__actions">
            {action && <span className="list__action">{action}</span>}

            {childrenContainsList && (
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
      </div>
    );
  }
}

export default ListItem;
