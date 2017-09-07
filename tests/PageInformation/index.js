import { React, expect, shallow } from '../setup';
import PageInformation from '../../lib/PageInformation';

describe('PageInformation', () => {
  let wrapper;

  it('always has a title', () => {
    wrapper = shallow(<PageInformation title="Hello World" />);
    expect(wrapper.find('.page-information__title').text()).to.equal('Hello World');
  });

  it('can have an optional text subtitle', () => {
    wrapper = shallow(<PageInformation title="Foo" subtitle="bar" />);
    expect(wrapper.find('.page-information__subtitle').text()).to.equal('bar');
  });

  it('can render a node as a subtitle', () => {
    const subtitle = (
      <span>
        Template: <span className="page-information__subtitle--highlight">hi</span>
      </span>
    );
    wrapper = shallow(<PageInformation title="Foo" subtitle={subtitle} />);
    expect(wrapper.find('.page-information__subtitle').text()).to.equal('Template: hi');
  });
});
