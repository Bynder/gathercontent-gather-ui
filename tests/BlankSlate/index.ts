import { React, mount } from '../setup';
import { BlankSlate } from '../../lib';
import keyboardSVG from '../../assets/icons/keyboard.svg';

describe('Blank Slate', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BlankSlate>
        <div className="child">I am a small child</div>
      </BlankSlate>
    );
  });

  test('renders the BlankSlate SVG', () => {
    expect(wrapper.find('.blank-slate__svg')).toHaveLength(1);
  });

  test('adds a fixed modifier', () => {
    expect(wrapper.hasClass('blank-slate--fixed')).toBe(false);
    wrapper.setProps({ fixed: true });
    wrapper.update();
    expect(wrapper.render().hasClass('blank-slate--fixed')).toBe(true);
  });

  test('adds a style modifer', () => {
    expect(wrapper.hasClass('blank-slate--arrow')).toBe(false);
    wrapper.setProps({ slateStyle: 'arrow' });
    wrapper.update();
    expect(wrapper.render().hasClass('blank-slate--arrow')).toBe(true);
  });

  test('renders its children', () => {
    expect(wrapper.find('.blank-slate__content')).toHaveLength(1);
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  test('renders a customSVG', () => {
    expect(wrapper.find('.blank-slate__svg--custom')).toHaveLength(0);
    wrapper.setProps({ customSVG: keyboardSVG });
    wrapper.update();
    expect(wrapper.find('.blank-slate__svg--custom').hostNodes()).toHaveLength(
      1
    );
  });
});
