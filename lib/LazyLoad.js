import React from 'react';
import debounce from 'lodash/debounce';

class LazyLoad extends React.Component {
  constructor(props) {
    super(props);

    this.updateViewport = debounce(this.updateViewport.bind(this), 100);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateViewport);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateViewport);
  }

  updateViewport() {
    const documentElement = document.documentElement;
    const height = Math.max(documentElement.clientHeight, window.innerHeight || 0);
    const scroll = document.body.scrollTop || (documentElement && documentElement.scrollTop);
    const scrolled = (height + scroll) >= document.body.offsetHeight;

    if (scrolled) {
      this.props.callback();
    }
  }

  render() {
    return null;
  }
}

LazyLoad.propTypes = {
  callback: React.PropTypes.func.isRequired,
};

export default LazyLoad;
