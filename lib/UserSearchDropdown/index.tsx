import React, { Component } from "react";
import Dropdown from "../Dropdown";
import Icon from "../Icon";
import TooltipWrapper from "../TooltipWrapper";
// eslint-disable-next-line import/no-named-as-default
import UserSearch from "../UserSearch";

export class UserSearchDropdown extends Component {
  searchInputRef = React.createRef();

  focusSearch = ({ type }: any) => {
    if (type === "ACTIVE") {
      // @ts-expect-error
      this.searchInputRef.current.focus();
    }
  };

  render() {
    // @ts-expect-error TS(2339): Property 'useAtIcon' does not exist on type 'Reado... Remove this comment to see the full error message
    const icon = this.props.useAtIcon ? "at" : "addPerson";
    return (
      <Dropdown
        id="user-search"
        // @ts-expect-error TS(2339): Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
        className={`gui-user-search__dropdown ${this.props.className}`}
        onToggle={this.focusSearch}
        // @ts-expect-error TS(2339): Property 'dropdownAutoPosition' does not exist on ... Remove this comment to see the full error message
        autoPosition={this.props.dropdownAutoPosition}
      >
        <TooltipWrapper
          id="user-search-tooltop"
          // @ts-expect-error TS(2339): Property 'tooltipText' does not exist on type 'Rea... Remove this comment to see the full error message
          tooltipText={this.props.tooltipText}
          placement="top"
        >
          <Dropdown.Trigger useButton types={["icon-only"]}>
            <Icon name={icon} title="Open user search" />
          </Dropdown.Trigger>
        </TooltipWrapper>
        <Dropdown.Content collapse fixRight>
          <UserSearch
            ref={this.searchInputRef}
            // @ts-expect-error TS(2339): Property 'users' does not exist on type 'Readonly<... Remove this comment to see the full error message
            users={this.props.users}
            // @ts-expect-error TS(2339): Property 'addUser' does not exist on type 'Readonl... Remove this comment to see the full error message
            addUser={this.props.addUser}
            // @ts-expect-error TS(2339): Property 'displayEmail' does not exist on type 'Re... Remove this comment to see the full error message
            displayEmail={this.props.displayEmail}
            // @ts-expect-error TS(2339): Property 'searchHeading' does not exist on type 'R... Remove this comment to see the full error message
            searchHeading={this.props.searchHeading}
            hideAfterPerformingAction
          />
        </Dropdown.Content>
      </Dropdown>
    );
  }
}

// @ts-expect-error TS(2339): Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
UserSearchDropdown.defaultProps = {
  searchHeading: "Search...",
  tooltipText: "",
  className: "",
  useAtIcon: false,
};

export default UserSearchDropdown;
