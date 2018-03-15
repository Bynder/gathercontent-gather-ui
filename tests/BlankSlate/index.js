import { React, shallow } from '../setup';
import { BlankSlate } from '../../lib';

describe('Blank Slate', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
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
    expect(wrapper.hasClass('blank-slate--fixed')).toBe(true);
  });

  test('adds a style modifer', () => {
    expect(wrapper.hasClass('blank-slate--arrow')).toBe(false);
    wrapper.setProps({ style: 'arrow' });
    expect(wrapper.hasClass('blank-slate--arrow')).toBe(true);
  });

  test('renders its children', () => {
    expect(wrapper.find('.blank-slate__content')).toHaveLength(1);
    expect(wrapper.find('.child')).toHaveLength(1);
  });
});
