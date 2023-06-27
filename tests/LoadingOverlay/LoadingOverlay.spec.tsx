import { React, shallow } from '../setup';
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Loadi... Remove this comment to see the full error message
import { LoadingOverlay } from '../../lib';
// @ts-expect-error TS(2307): Cannot find module '../../assets/loading.svg' or i... Remove this comment to see the full error message
import loadingSVG from '../../assets/loading.svg';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Loading Overlay', () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(<LoadingOverlay />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders a Loading SVG', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('svg')).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('svg').props()).toEqual(loadingSVG().props);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('deosnt render a Loading SVG if hideSVG is true', () => {
    wrapper.setProps({ hideSVG: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('svg')).toHaveLength(0);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds a fixed modifier', () => {
    wrapper.setProps({ fixed: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass('loading-overlay--fixed')).toBe(true);
  });
});
