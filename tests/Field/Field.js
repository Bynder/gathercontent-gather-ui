import { React, shallow } from '../setup';
import { Field } from '../../lib';
import FieldActions from '../../lib/Field/FieldActions';
import FieldValidations from '../../lib/Field/FieldValidations';
import Button from '../../lib/Button';
import ExpandingTextArea from '../../lib/ExpandingTextArea';
import EditableTextWrapper from '../../lib/EditableTextWrapper';

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

  test('renders loading state', () => {
    wrapper.setProps({ isLoading: true });
    expect(wrapper.text()).toEqual('LOADING!');
  });

  test('renders read only state', () => {
    wrapper.setProps({ isReadOnly: true });
    expect(wrapper.text()).toEqual('READ ONLY!');
  });

  test('renders an editing state and passes the relevant props', () => {
    wrapper.setProps({
      canEdit: true,
      instructionsMinRows: 3,
      instructionsPlaceholder: 'some text'
    });
    expect(wrapper.find(EditableTextWrapper)).toHaveLength(1);
    expect(wrapper.find(EditableTextWrapper).prop('value')).toEqual('Test label');
    expect(wrapper.find(ExpandingTextArea)).toHaveLength(1);
    expect(wrapper.find(ExpandingTextArea).prop('minRows')).toEqual(3);
    expect(wrapper.find(ExpandingTextArea).prop('placeholder')).toEqual(
      'some text'
    );
  });

  test('renders a label', () => {
    expect(wrapper.contains('Test label')).toBe(true);
  });

  test('renders actions', () => {
    expect(wrapper.find(FieldActions)).toHaveLength(1);
  });

  test('renders validations', () => {
    expect(wrapper.find(FieldValidations)).toHaveLength(1);
  });

  test('renders its children', () => {
    const children = wrapper.children();
    expect(children.find(Button)).toHaveLength(1);
  });

  test('renders instructions', () => {
    expect(wrapper.contains('Instructions test text')).toBe(true);

    wrapper.setProps({
      instructions: ''
    });

    expect(wrapper.contains('Instructions test text')).toBe(false);
  });

  test('adds conditional classes for formatting', () => {
    wrapper.setProps({ hasFormatting: true });
    expect(wrapper.hasClass('has-formatting')).toEqual(true);
  });
});
