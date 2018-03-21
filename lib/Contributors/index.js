import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon, Button, AvatarWithInformation, SearchDropdown } from '../';

class Contributors extends Component {

  static propTypes = {
    currentContributors: PropTypes.arrayOf(PropTypes.shape()),
    currentViewers: PropTypes.arrayOf(PropTypes.shape()),
    searchResults: PropTypes.arrayOf(PropTypes.shape()),
    addAssignee: PropTypes.func.isRequired,
    removeAssignee: PropTypes.func.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
    handleClearResults: PropTypes.func.isRequired,
    userCanAddAssignee: PropTypes.bool,
    emptyText: PropTypes.string,
  };

  static defaultProps = {
    currentContributors: [],
    currentViewers: [],
    searchResults: [],
    emptyText: 'There is no one assigned yet',
    userCanAddAssignee: false,
  };
  constructor() {
    super();
    this.state = {
      showSearch: false,
    }
  }
  toggleSearch = () => this.setState({ showSearch: !this.state.showSearch });

  getCurrentViewers = () => this.props.currentViewers.map(viewer => (
    <AvatarWithInformation
      key={viewer.id}
      url={viewer.avatar}
      name={viewer.name}
      initials={viewer.initials}
      colour={viewer.colour}
      smallSize
    />
  ));

  getCurrentContributors = () => {
    const contributors = this.props.currentContributors;
    const additional = this.props.userCanAddAssignee ? (
      <Button
        types={['link-danger', 'size-sm']}
        clickHandler={this.props.removeAssignee}>
        Remove
      </Button>
    ) : '';

    if (contributors.length > 0) {
      return contributors.map(contributor => (
        <AvatarWithInformation
          key={contributor.id}
          url={contributor.avatar}
          name={contributor.name}
          initials={contributor.initials}
          additional={additional}
          isOffline={!contributor.isPresent}
          colour={contributor.colour}
          smallSize
        />
      ));
    }
    return (
      <div className="contributors__empty">{this.props.emptyText} <br />
        {this.props.userCanAddAssignee &&
          <Button
            types={['link-default', 'size-sm']}
            clickHandler={this.toggleSearch}
            className="contributors__empty-button"
          >
            Assign someone now.
          </Button>
        }
      </div>
    )
  }
  render() {
    const assigneeLength = this.props.currentContributors.length;

    const classNames = cx('contributors', {
      'contributors--search-open': this.state.showSearch,
    });

    return (
      <div className={classNames}>
        <div className="contributors__heading">
          Contributors
          {this.props.userCanAddAssignee &&
            <Button
              types={['icon-only']}
              clickHandler={this.toggleSearch}
              className="show-search is-active"
            >
              <Icon
                name="plusCircle"
              />
            </Button>
          }
        </div>
        <div className="contributors__list">
          <div className="contributors__subheading">
            Assigned ({assigneeLength})
          </div>
          {this.getCurrentContributors()}
        </div>
        {(this.props.userCanAddAssignee && this.state.showSearch) &&
          <SearchDropdown
            className="contributors__search"
            results={this.props.searchResults}
            placeholder="Search"
            alignRight
            fullWidth
            handleOnChange={this.props.handleSearchChange}
            onInputClear={this.props.handleClearResults}
            resultsTitle="Assign..."
          />
        }
        {(this.props.currentViewers.length > 0) &&
          <div className="contributors__viewing-list">
            <div className="contributors__subheading">
              Viewing
            </div>
            {this.getCurrentViewers()}
          </div>
        }
      </div>
    );
  }
}

export default Contributors;
