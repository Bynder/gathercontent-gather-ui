// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { MenuItem, Navigation } from 'lib';
import { React, mount } from '../setup';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Navigation', () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = mount(
      <Navigation>
        // @ts-expect-error TS(2304): Cannot find name 'href'.
        <MenuItem href="#" active>
          // @ts-expect-error TS(2552): Cannot find name 'Items'. Did you mean 'items'?
          Items
        </MenuItem>
        // @ts-expect-error TS(2304): Cannot find name 'href'.
        <MenuItem href="#">Archived Items</MenuItem>
      </Navigation>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders 2 MenuItems', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(MenuItem)).toHaveLength(2);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds the tabs modifier class', () => {
    wrapper.setProps({
      tabs: true
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.navigation--tabs')).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('applies navigation__item to both MenuItems', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.navigation__item').hostNodes()).toHaveLength(2);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('applies navigation__item--active to both 1 MenuItems', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.navigation__item--active').hostNodes()).toHaveLength(
      1
    );
  });
});
