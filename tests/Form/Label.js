import { React, expect, shallow } from '../setup';
import Label from '../../lib/Form/Label';

describe('Label', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Label id="123" label="foo bar" />);
  });

  it('has a html label with a "for" attribute', () => {
    expect(wrapper.find('label').prop('htmlFor')).to.equal('123');
    expect(
      wrapper
        .find('label')
        .find('.form-input__text')
        .prop('children')
    ).to.include('foo bar');
  });

  it('may have a subtitle', () => {
    wrapper.setProps({ subtitle: 'some description' });
    const expectedSubtitle = (
      <span className="form-checkbox__subtitle">some description</span>
    );
    expect(wrapper.find('label').prop('children')).to.include(expectedSubtitle);
  });

  it('adds a highlight modifier to the text', () => {
    wrapper.setProps({ highlight: true });
    const hasHighlightClass = wrapper
      .find('.form-input__text')
      .hasClass('form__input-text--highlight');
    expect(hasHighlightClass).to.equal(true);
  });
});
