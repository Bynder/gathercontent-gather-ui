import { React, mount } from '../setup';
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Blank... Remove this comment to see the full error message
import { BlankSlate } from '../../lib';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/keyboard.sv... Remove this comment to see the full error message
import keyboardSVG from '../../assets/icons/keyboard.svg';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Blank Slate', () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = mount(
      <BlankSlate>
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="child">I am a small child</div>
      </BlankSlate>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders the BlankSlate SVG', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.blank-slate__svg')).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds a fixed modifier', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass('blank-slate--fixed')).toBe(false);
    wrapper.setProps({ fixed: true });
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.render().hasClass('blank-slate--fixed')).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds a style modifer', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass('blank-slate--arrow')).toBe(false);
    wrapper.setProps({ slateStyle: 'arrow' });
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.render().hasClass('blank-slate--arrow')).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders its children', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.blank-slate__content')).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders a customSVG', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.blank-slate__svg--custom')).toHaveLength(0);
    wrapper.setProps({ customSVG: keyboardSVG });
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.blank-slate__svg--custom').hostNodes()).toHaveLength(
      1
    );
  });
});
