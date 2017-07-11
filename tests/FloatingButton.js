import { React, expect, sinon, jsDomGlobal, mount } from './setup';
import FloatingButton from '../lib/FloatingButton';
jsDomGlobal();

describe('ButtonWithTooltip', () => {
  let sandbox, wrapper, clickHandlerSpy;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    clickHandlerSpy = sandbox.spy();
    wrapper = mount(<FloatingButton
      onClickHandler={clickHandlerSpy}
      type="comment"
      className="hello"
    />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders a FloatingButton component', () => {
    expect(wrapper.find(FloatingButton)).to.have.length(1);
  });

  it('renders a custom class', () => {
    expect(wrapper.props().className).to.equal('hello');
  });

  it('renders an SVG inside the button', () => {
    const svg = wrapper.find('svg').prop('children');
    expect(svg[0].props.children).to.equal('Comment Icon');
  });

  it('triggers its button click handler', () => {
    wrapper.simulate('click');
    expect(clickHandlerSpy.calledOnce).to.equal(true);
  });

});
