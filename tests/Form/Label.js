import { React, expect, shallow } from '../setup';
import Label from '../../lib/Form/Label';

describe('Label', () => {
  it('has a html label with a "for" attribute', () => {
    const wrapper = shallow(<Label id="123" label="foo bar" />);
    expect(wrapper.find('label').prop('htmlFor')).to.equal('123');
    expect(wrapper.find('label').prop('children')).to.include('foo bar');
  });

  it('may have a subtitle', () => {
    const wrapper = shallow(<Label id="123" label="foo bar" subtitle="some description" />);
    const expectedSubtitle = <span className="form-checkbox__subtitle">some description</span>;
    expect(wrapper.find('label').prop('children')).to.include(expectedSubtitle);
  })
});
