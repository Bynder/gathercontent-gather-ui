import { React, expect, sinon, jsDomGlobal, mount } from './setup';
import Button from '../lib/Button';
jsDomGlobal();

import { Button as ButtonBob } from '../dist/index';

describe('Button', () => {
  let sandbox, wrapper, button, clickHandlerSpy;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    clickHandlerSpy = sandbox.spy();
    wrapper = mount(<Button clickHandler={clickHandlerSpy}>Botão</Button>);
    button = wrapper.find('button');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should render text passed on children', () => {
    expect(button.prop('children')).to.equal('Botão');
  });

  it('should render a primary button by default', () => {
    expect(button.prop('className')).contains('button button--primary');
  });

  it('should render a button with multiple type classes', () => {
    wrapper.setProps({
      'types': ['clear', 'collapsed'],
    });
    expect(button.prop('className')).contains('button button--clear button--collapsed');
  });

  it('should render custom classes', () => {
    wrapper.setProps({
      className: 'custom-class'
    });
    expect(button.prop('className')).contains('custom-class');
  });

  it('should call props.clickHandler when clicked', () => {
    wrapper.simulate('click');
    expect(clickHandlerSpy.calledOnce).to.equal(true);
  });

  it('should set state.disabled to true when clicked if props.disableOnClick is true', () => {
    wrapper.setProps({
      disableOnClick: true,
    });
    wrapper.simulate('click');
    expect(wrapper.state('disabled')).to.equal(true);
  });

  it('should not set state.disabled to true when clicked if props.disableOnClick is false', () => {
    wrapper.simulate('click');
    expect(wrapper.state('disabled')).to.equal(false);
  });
});
