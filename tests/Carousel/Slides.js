import { React, expect, shallow } from '../setup';
import CarouselSlides from '../../lib/Carousel/Slides';

describe('Carousel/Slides', () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(
      <CarouselSlides selected={0} className="custom-class">
        <div>slide 1</div>
        <div>slide 2</div>
      </CarouselSlides>
    );
  });

  it('should receive a custom top level parent class', () => {
    expect(shallowWrapper.props().className).to.equal('custom-class');
  });

  it('should receive a given number of children as carousel slides', () => {
    expect(shallowWrapper.find('.carousel__slide-wrapper').length).to.equal(2);
  });

  it('should render the expected content for a slide', () => {
    const content = shallowWrapper.find('.carousel__slide-wrapper').first();
    expect(content.contains(<div>slide 1</div>)).to.equal(true);
  });
});
