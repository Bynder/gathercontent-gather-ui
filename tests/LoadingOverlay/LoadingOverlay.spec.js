import { React, shallow } from '../setup';
import { LoadingOverlay } from '../../lib';
import loadingSVG from '../../assets/loading.svg';

describe('Loading Overlay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoadingOverlay />);
  });

  test('renders a Loading SVG', () => {
    expect(wrapper.find('svg')).toHaveLength(1);
    expect(wrapper.find('svg').props()).toEqual(loadingSVG().props);
  });

  test('deosnt render a Loading SVG if hideSVG is true', () => {
    wrapper.setProps({ hideSVG: true });
    expect(wrapper.find('svg')).toHaveLength(0);
  });

  test('adds a fixed modifier', () => {
    wrapper.setProps({ fixed: true });
    expect(wrapper.hasClass('loading-overlay--fixed')).toBe(true);
  });
});
