import { React, expect, sinon, jsDomGlobal, shallow } from './setup';
import Notification from '../lib/Notification/';
import { Alert } from 'react-bootstrap/lib';

jsDomGlobal();

describe('Notification', () => {
  let wrapper, sandbox, clickHandlerSpy;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    clickHandlerSpy = sandbox.spy();
    wrapper = shallow(<Notification level="warning">Dummy</Notification>);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders an Alert component', () => {
    expect(wrapper.find(Alert)).to.have.length(1);
  });

  it('renders children', () => {
    expect(wrapper.contains('Dummy')).to.equal(true);
  });

  it('renders the correct level class', () => {
    expect(wrapper.find(Alert).hasClass('notification notification--warning')).to.equal(true);
  });

  it('passes the clickHandler prop to the Alert component and adds class', () => {
    wrapper.setProps({
      clickHandler: clickHandlerSpy,
    });
    expect(wrapper.find(Alert).prop('onClick')).to.equal(clickHandlerSpy);
    expect(wrapper.find(Alert).hasClass('has-click-handler')).to.equal(true);
  });
});
