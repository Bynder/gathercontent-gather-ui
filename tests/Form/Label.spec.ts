import { React, shallow } from '../setup';
import Label from '../../lib/Form/Label';

describe('Label', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Label id="123" label="foo bar" />);
  });

  test('has a html label with a "for" attribute', () => {
    expect(wrapper.find('label').prop('htmlFor')).toEqual('123');
    expect(
      wrapper
        .find('label')
        .find('.form-input__text')
        .prop('children')
    ).toContain('foo bar');
  });

  test('may have a subtitle', () => {
    wrapper.setProps({ subtitle: 'some description' });
    const expectedSubtitle = (
      <span className="form-checkbox__subtitle">some description</span>
    );
    expect(wrapper.find('label').contains(expectedSubtitle)).toBe(true);
  });

  test('adds a highlight modifier to the text', () => {
    wrapper.setProps({ highlight: true });
    const hasHighlightClass = wrapper
      .find('.form-input__text')
      .hasClass('is-highlight');
    expect(hasHighlightClass).toEqual(true);
  });

  test('adds an active state class to the text', () => {
    wrapper.setProps({ active: true });
    const hasActiveClass = wrapper
      .find('.form-input__text')
      .hasClass('is-active');
    expect(hasActiveClass).toEqual(true);
  });

  test('adds an disabled state class to the label', () => {
    wrapper.setProps({ disabled: true });
    const hasActiveClass = wrapper
      .find('.form-checkbox__label')
      .hasClass('is-disabled');
    expect(hasActiveClass).toEqual(true);
  });

  test('is passed overrideLabelDefault as false, it renders a label and not a button', () => {
    wrapper.setProps({ overrideLabelDefault: false });
    expect(wrapper.find('.form-checkbox__label')).toHaveLength(1);
    expect(wrapper.find('.form-checkbox__label--button')).toHaveLength(0);
  });

  test('is passed overrideLabelDefault as true, it renders a button instead of a label', () => {
    wrapper.setProps({ overrideLabelDefault: true });
    expect(wrapper.find('.form-checkbox__label--button')).toHaveLength(1);
  });

  test('is passed overrideLabelDefault as a function, it fires on click', () => {
    const labelClickSpy = jest.fn();
    wrapper.setProps({ overrideLabelDefault: labelClickSpy });
    expect(wrapper.find('.form-checkbox__label--button')).toHaveLength(1);
    wrapper.simulate('click');
    expect(labelClickSpy).toHaveBeenCalled();
  });

  test('labelMouseEnter and labelMouseLeave prop functions are called on mouseEnter and mouseLeave', () => {
    const labelMouseEnterSpy = jest.fn();
    const labelMouseLeaveSpy = jest.fn();
    wrapper.setProps({
      overrideLabelDefault: true,
      labelMouseEnter: labelMouseEnterSpy,
      labelMouseLeave: labelMouseLeaveSpy
    });
    wrapper.simulate('mouseEnter');
    expect(labelMouseEnterSpy).toHaveBeenCalled();
    wrapper.simulate('mouseLeave');
    expect(labelMouseLeaveSpy).toHaveBeenCalled();
  });

  test('adding a hinted modifier class', () => {
    wrapper.setProps({ hinted: true });
    expect(wrapper.hasClass('form-checkbox__label--hinted')).toBe(true);
  });
});
