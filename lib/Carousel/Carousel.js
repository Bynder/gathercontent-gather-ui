import React from 'react';

const Carousel = (props) => {
  const length = props.length || props.children.length;

  const styles = {
    root: {
      overflow: 'hidden',
    },
    inner: {
      whiteSpace: 'nowrap',
      height: '100%',
      transition: 'left .2s ease-in-out',
      position: 'relative',
      left: `${(props.selected % length) * -100}%`,
    },
    child: {
      display: 'inline-block',
      verticalAlign: 'top',
      whiteSpace: 'normal',
      width: '100%',
    },
  };

  const indicators = React.Children.map(props.children, (child, index) => {
    const isActive = props.selected === index ? 'is-active' : '';
    const classes = ['carousel-indicator__item', isActive].join(' ');

    return (
      <button
        onClick={() => props.goToSlide(index)}
        className={classes}
      />
    );
  });

  const slides = React.Children.map(props.children, child =>
    <div style={styles.child} className="carousel__slide-wrapper">
      {child}
    </div>
  );

  return (
    <div style={styles.root} className={props.className}>
      <div className="carousel-indicators">
        {props.showIndicators && indicators}
      </div>
      <div style={styles.inner}>
        {slides}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  length: React.PropTypes.number,
  selected: React.PropTypes.number,
  children: React.PropTypes.arrayOf(React.PropTypes.object),
  className: React.PropTypes.string,
  showIndicators: React.PropTypes.bool,
};

export default Carousel;
