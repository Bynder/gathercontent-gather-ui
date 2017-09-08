import { React, expect, shallow, sinon } from '../setup';
import PageInformation from '../../lib/PageInformation';
import EditableTextWrapper from '../../lib/EditableTextWrapper';

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

  it('can have an editable title', () => {
    const renameSpy = sinon.spy();
    wrapper = shallow(<PageInformation title="Original" editable rename={renameSpy} />);
    expect(wrapper.find(EditableTextWrapper)).to.have.length(1);
    wrapper.find(EditableTextWrapper).prop('onChange')('foo');
    expect(renameSpy).to.have.been.calledWith('foo');
  });
});
