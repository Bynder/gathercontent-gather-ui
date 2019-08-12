import React, { Component } from "react";

class InViewListItem extends Component {
  render() {
    const { renderIndexes, index, baseStyle } = this.props;
    const shouldRender = index >= renderIndexes.start && index <= renderIndexes.end;
    console.log(renderIndexes)
    const top = (renderIndexes.start + index) * 50;

    return shouldRender ? (
      <div key={`${index}-id`} style={{ ...baseStyle, top: `${top}px`, float: "left" }}>
        { shouldRender && this.props.children }
      </div>
    ) : null;
  }
}

export { InViewListItem };
