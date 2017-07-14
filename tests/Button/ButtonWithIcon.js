import { React, expect, sinon, jsDomGlobal, mount } from '../setup';
import ButtonWithIcon from '../../lib/Button/ButtonWithIcon';

jsDomGlobal();

describe('ButtonWithIcon', () => {
  let sandbox, wrapper, clickHandlerSpy;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    clickHandlerSpy = sandbox.spy();
    wrapper = mount(<ButtonWithIcon
      clickHandler={clickHandlerSpy}
      type="comment"
      className="hello"
    />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders a ButtonWithIcon component', () => {
    expect(wrapper.find(ButtonWithIcon)).to.have.length(1);
  });

  it('renders a custom class', () => {
    expect(wrapper.props().className).to.equal('hello');
  });

  it('renders an SVG inside the button', () => {
    const svg = wrapper.find('svg').prop('children');
    expect(svg[0].props.children).to.equal('comment');
  });

  it('triggers its button click handler', () => {
    wrapper.simulate('click');
    expect(clickHandlerSpy.calledOnce).to.equal(true);
  });

});
