import { React, expect, sinon, jsDomGlobal, mount } from '../setup';
import { Button } from '../../lib';

jsDomGlobal();

describe('Button', () => {
  let sandbox;
  let wrapper;
  let button;
  let clickHandlerSpy;

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

  it('should not be a submit button by default', () => {
    expect(button.prop('type')).to.equal('button');
  });

  it('can be a submit button', () => {
    wrapper.setProps({
      isSubmit: true
    });

    expect(button.prop('type')).to.equal('submit');
  });

  it('should render a button with multiple type classes', () => {
    wrapper.setProps({
      types: ['clear', 'collapsed']
    });
    expect(button.prop('className')).contains(
      'button button--clear button--collapsed'
    );
  });

  it('should render custom classes', () => {
    wrapper.setProps({
      className: 'custom-class'
    });
    expect(button.prop('className')).contains('custom-class');
  });

  it('should call props.clickHandler when clicked', () => {
    wrapper.simulate('click', { target: { value: 'foo' } });
    expect(clickHandlerSpy.calledOnce).to.equal(true);
    expect(clickHandlerSpy.firstCall.args[0].target.value).to.equal('foo');
  });

  it('should set state.disabled to true when clicked if props.disableOnClick is true', () => {
    wrapper.setProps({
      disableOnClick: true
    });
    wrapper.simulate('click');
    expect(wrapper.state('disabled')).to.equal(true);
  });

  it('should not set state.disabled to true when clicked if props.disableOnClick is false', () => {
    wrapper.simulate('click');
    expect(wrapper.state('disabled')).to.equal(false);
  });
});
