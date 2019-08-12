import React, { Component } from "react";

class InViewListItem extends Component {
  render() {
    const { renderIndexes, index, baseStyle } = this.props;
    const shouldRender = index >= renderIndexes.start && index <= renderIndexes.end;

    return shouldRender ? (
      <div key={`${index}-id`} style={{ ...baseStyle, top: `${index*50}px`, float: "left" }}>
        { shouldRender && this.props.children }
      </div>
    ) : null;
  }
}

export { InViewListItem };
