import { React, expect, shallow, sinon } from '../setup';
import { Tabs } from '../../lib';

describe('Tabs Button', () => {
  const onClickSpy = sinon.spy();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tabs.Button onClick={onClickSpy}>+</Tabs.Button>);
  });

  it('renders children', () => {
    expect(wrapper.text()).to.equal('+');
  });

  it('calls the onClick prop', () => {
    wrapper.find('button').simulate('click');
    expect(onClickSpy).to.be.calledOnce();
  });
});
