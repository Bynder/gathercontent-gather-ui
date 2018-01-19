import { React, shallow } from '../setup';
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

  test('should receive a custom top level parent class', () => {
    expect(shallowWrapper.props().className).toEqual('custom-class');
  });

  test('should receive a given number of children as carousel slides', () => {
    expect(shallowWrapper.find('.carousel__slide-wrapper').length).toEqual(2);
  });

  test('should render the expected content for a slide', () => {
    const content = shallowWrapper.find('.carousel__slide-wrapper').first();
    expect(content.contains(<div>slide 1</div>)).toEqual(true);
  });
});
