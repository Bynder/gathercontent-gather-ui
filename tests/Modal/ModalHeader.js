import { Header } from 'react-bootstrap/lib/Modal';
import { React, expect, jsDomGlobal, shallow } from '../setup';
import { Modal } from '../../lib';

jsDomGlobal();

describe('Modal Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Modal.Header testProp="test">
        <p>Hello world</p>
      </Modal.Header>
    );
  });

  it('renders its children', () => {
    expect(wrapper.find('p')).to.have.length(1);
  });

  it('shares props with Bootstrap component', () => {
    expect(wrapper.type()).to.deep.equal(Header);
    expect(wrapper.prop('testProp')).to.equal('test');
  });

  it('sets the closeButton prop to true by default', () => {
    expect(wrapper.prop('closeButton')).to.equal(true);
  });
});
