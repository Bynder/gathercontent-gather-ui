import { React, expect, sinon, jsDomGlobal, shallow, mount } from './setup';
import Button from '../lib/Button';
jsDomGlobal();

describe('Button', () => {
  let sandbox, props;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should render a primary button component', () => {
    props = { value: 'Botão', type: 'primary' };

    let Element = shallow(<Button {...props}/>);
    let button = Element.find('button');

    expect(button).to.have.length(1);
    expect(button.text()).to.equal('Botão');
    expect(button.props().className).to.contain('primary');
  });

  it('should render a secondary button component', () => {
    props = { type: 'secondary' };

    let Element = shallow(<Button {...props}/>);

    expect(Element
      .find('button')
      .props()
      .className
    ).to.equal('btn btn--secondary');
  });

  it('should receive a custom class name when given one as props', () => {
    props = {type: 'primary', className: 'custom--class'};

    let Element = shallow(<Button {...props} />);

    expect(Element
      .find('button')
      .props()
      .className)
      .to.equal('btn btn--primary custom--class');
  });

  it('should call its onClick handler when clicked', () => {
    props = {
      value: 'Second',
      type: 'secondary',
      clickHandler: sandbox.spy()
    };

    let Element = mount(<Button {...props}/>);
    let button = Element.find('button').simulate('click');

    expect(props.clickHandler.called).to.equal(true);
  });

  it('should set state.disabled to true when clicked', () => {
    props = {
      disableOnClick: true,
      clickHandler: sandbox.spy()
    };

    let Element = shallow(<Button {...props}/>);
    let button = Element.find('button').simulate('click');
    expect(Element.state('disabled')).to.equal(true);
  });

  it('should not set state.disabled to true when clicked', () => {
    props = {
      clickHandler: sandbox.spy()
    };

    let Element = shallow(<Button {...props}/>);
    let button = Element.find('button').simulate('click');
    expect(Element.state('disabled')).to.equal(false);
  });
});