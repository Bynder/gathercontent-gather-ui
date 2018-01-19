import { React, shallow } from '../../setup';
import composeNavigation from '../../../lib/Carousel/composition/navigation';

const MockComponent = () => <div />;

describe('Carousel/composition/navigation', () => {
  let shallowWrapper;
  let mockComponent;
  let WrapperComponent;

  beforeEach(() => {
    mockComponent = <MockComponent />;

    WrapperComponent = composeNavigation(mockComponent);
    shallowWrapper = shallow(<WrapperComponent />);
  });

  test('Renders a CarouselContainer instance', () => {
    expect(shallowWrapper).toHaveLength(1);
  });

  test('Has an initial selected index of 0', () => {
    expect(shallowWrapper.props().selected).toEqual(0);
  });

  test('Should move up and down the selected indices', () => {
    shallowWrapper.props().goNext();
    expect(shallowWrapper.state().selected).toEqual(1);

    shallowWrapper.props().goPrevious();
    expect(shallowWrapper.state().selected).toEqual(0);

    shallowWrapper.props().goPrevious();
    expect(shallowWrapper.state().selected).toEqual(0);
  });

  test('Should move to a specified index', () => {
    shallowWrapper.props().goToSlide(10);
    expect(shallowWrapper.state().selected).toEqual(10);
  });
});
