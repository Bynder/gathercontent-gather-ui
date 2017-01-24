import { React, expect, sinon, jsDomGlobal, shallow, mount } from './setup';
import Button from '../lib/Button';
jsDomGlobal();

describe('ProgressButton', () => {
  let sandbox, props;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should render a button component', () => {
    props = { value: 'Botão', type: 'primary' };

    let Element = shallow(<Button {...props}/>);
    let button = Element.find('button');

    expect(button).to.have.length(1);
    expect(button.text()).to.equal('Botão');
    expect(button.props().className).to.contain('primary');
  });

});
