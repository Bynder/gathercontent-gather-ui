import { React, shallow } from '../setup';
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Finde... Remove this comment to see the full error message
import { FinderNavigation } from '../../lib';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('FinderNavigation Item', () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <FinderNavigation.Item>
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="child">hello!</div>
      </FinderNavigation.Item>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders children', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds an active class', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass('finder-item-active')).toBe(false);
    wrapper.setProps({ active: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass('finder-item-active')).toBe(true);
  });
});
