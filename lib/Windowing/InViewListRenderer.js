import React, { Component } from "react";
import debounce from 'debounce';

class InViewListRenderer extends Component {
  static defaultProps = {
    rowCount: 1,
    offsetCount: 20
  };

  state = {
    renderIndexes: { start: null, end: null },
    items: []
  };

  constructor() {
    super();
    this.updateProjection = debounce(this.updateProjection, 5);
  }

  componentDidMount() {
    this.createProjection();
    window.addEventListener("scroll", this.updateProjection);
    window.addEventListener("resize", this.updateProjection);
  }

  checkIfItemIsInView = item => {
    const isAboveBottomOfViewPort =
      item.top + this.props.defaultItemHeight / this.props.rowCount <
      window.innerHeight + window.scrollY;

    return item.top >= window.scrollY && isAboveBottomOfViewPort;
  };

  updateProjectionFromEvent = e => {
    this.updateProjection();
  };

  updateProjection = () => {
    this.setState(
      {
        items: this.state.items.map((item, index) => ({
          ...item,
          inView: this.checkIfItemIsInView(item)
        }))
      },
      () => {
        this.getRenderIndexes();
      }
    );
  };

  getItemTopPosition = index => {
    return (
      Math.floor(index / this.props.rowCount) * this.props.defaultItemHeight
    );
  };

  createProjection = () => {
    this.setState(
      {
        items: [...new Array(this.props.itemCount)].map((i, index) => ({
          height: this.props.defaultItemHeight / this.props.rowCount,
          top: this.getItemTopPosition(index),
          inView: false
        }))
      },
      () => {
        this.updateProjection();
      }
    );
  };

  getRenderIndexes = () => {
    let startIndex = "not-set";
    let startIndexOffset = 0;
    let endIndex = 0;
    const itemsInView = this.state.items.filter(item => item.inView);

    for (let i = 0; startIndex === "not-set"; i++) {
      const item = this.state.items[i];

      if (!item) {
        startIndex = null;
        startIndexOffset = null;
      }

      if (item.inView) {
        startIndex = i;
        startIndexOffset = i;
      }
    }

    if (startIndex - this.props.offsetCount < 0 || !startIndex) {
      startIndex = 0;
    }

    if (startIndex - this.props.offsetCount >= 0) {
      startIndex = startIndex - this.props.offsetCount;
    }

    endIndex = startIndexOffset + itemsInView.length + this.props.offsetCount;

    if (endIndex > this.props.itemCount) {
      endIndex = this.props.itemCount;
    }

    return this.setState({
      renderIndexes: { start: startIndex, end: endIndex || 0 }
    });
  };

  render() {
    const { renderIndexes } = this.state;

    const sharedState = {
      renderIndexes,
      style: {
        position: 'absolute',
        width: `${100 / this.props.rowCount}%`,
        height: `${this.props.defaultItemHeight}px`,
      }
    };

    return (
      <div style={{
        height: `${this.props.itemCount * this.props.defaultItemHeight}px`
      }}>
        {this.props.children(sharedState)}
      </div>
    );
  }
}

export { InViewListRenderer };
