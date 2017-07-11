import { React, expect, jsDomGlobal, mount } from '../setup';
import ProgressButton from '../../lib/ProgressButton';
jsDomGlobal();

describe('ProgressButton', () => {
  let wrapper, button;

  beforeEach(() => {
    wrapper = mount(<ProgressButton clickHandler={() => {}} value="Botão" />);
    button = wrapper.find('button');
  });

  it('is not a submit button by default', () => {
    expect(button.prop('type')).to.equal('button');
  });

  it('can be a submit button', () => {
    wrapper.setProps({
      'isSubmit': true,
    });
    expect(button.prop('type')).to.equal('submit');
  });
});
