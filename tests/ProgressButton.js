import { React, expect, sinon, jsDomGlobal, shallow } from './setup';
import Button from '../lib/Button';

describe('ProgressButton', () => {
  let sandbox;
  let props;

  jsDomGlobal();

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should render a button component', () => {
    props = { type: 'primary' };

    const Element = shallow(
      <Button clickHandler={() => {}} {...props}>
        Botão
      </Button>
    );
    const button = Element.find('button');

    expect(button).to.have.length(1);
    expect(button.text()).to.equal('Botão');
    expect(button.props().className).to.contain('primary');
  });
});
