import { React, expect, shallow } from '../setup';
import { Field } from '../../lib';
import FieldActions from '../../lib/Field/FieldActions';
import FieldValidations from '../../lib/Field/FieldValidations';
import Button from '../../lib/Button';

describe('Field', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Field
        label="Test label"
        instructions="Instructions test text"
        fieldId="123"
      >
        <Button clickHandler={() => {}}>Hello world</Button>
      </Field>
    );
  });

  afterEach(() => {});

  it('renders loading state', () => {
    wrapper.setProps({ isLoading: true });
    expect(wrapper.text()).to.equal('LOADING!');
  });

  it('renders read only state', () => {
    wrapper.setProps({ isReadOnly: true });
    expect(wrapper.text()).to.equal('READ ONLY!');
  });

  it('renders an editing state', () => {
    wrapper.setProps({ canEdit: true });
    expect(wrapper.find('.field__label').type()).to.equal('input');
    expect(wrapper.find('.field__instructions').type()).to.equal('input');
  });

  it('renders a label', () => {
    expect(wrapper.contains('Test label')).to.be.true();
  });

  it('renders actions', () => {
    expect(wrapper.find(FieldActions)).to.have.length(1);
  });

  it('renders validations', () => {
    expect(wrapper.find(FieldValidations)).to.have.length(1);
  });

  it('renders its children', () => {
    const children = wrapper.children();
    expect(children.find(Button)).to.have.length(1);
  });

  it('renders instructions', () => {
    expect(wrapper.contains('Instructions test text')).to.be.true();

    wrapper.setProps({
      instructions: ''
    });

    expect(wrapper.contains('Instructions test text')).to.be.false();
  });
});
