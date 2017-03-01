import React from 'react';

const ExampleCarouselChild = (props) =>
  <div>
    <h2>{props.title}</h2>
    <button onClick={props.goNext}>Next</button>
  </div>;

export default ExampleCarouselChild;
