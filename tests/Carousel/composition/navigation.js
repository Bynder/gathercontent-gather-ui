import { React, expect, shallow } from '../../setup';
import composeNavigation from '../../../lib/Carousel/composition/navigation';

const MockComponent = () => <div />;

describe('Carousel/composition/navigation', () => {
  let shallowWrapper, mockComponent, WrapperComponent;

  beforeEach(() => {
    mockComponent = <MockComponent />;

    WrapperComponent = composeNavigation(mockComponent);
    shallowWrapper = shallow(<WrapperComponent />);
  });

  it('Renders a CarouselContainer instance', () => {
    expect(shallowWrapper).to.have.length(1);
  });

  it('Has an initial selected index of 0', () => {
    expect(shallowWrapper.props().selected).to.equal(0);
  });

  it('Should move up and down the selected indices', () => {
    shallowWrapper.props().goNext();
    expect(shallowWrapper.state().selected).to.equal(1);

    shallowWrapper.props().goPrevious();
    expect(shallowWrapper.state().selected).to.equal(0);

    shallowWrapper.props().goPrevious();
    expect(shallowWrapper.state().selected).to.equal(0);
  });

  it('Should move to a specified index', () => {
    shallowWrapper.props().goToSlide(10);
    expect(shallowWrapper.state().selected).to.equal(10);
  });
});
