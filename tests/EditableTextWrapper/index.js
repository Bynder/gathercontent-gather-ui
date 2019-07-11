import { React, shallow } from '../setup';
import { EditableTextWrapper, Button, ExpandingTextArea } from '../../lib';

describe('EditableTextWrapper', () => {
  let wrapper;
  let onChangeSpy;
  let onStartEditingSpy;
  let onStopEditingSpy;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    onStartEditingSpy = jest.fn();
    onStopEditingSpy = jest.fn();

    wrapper = shallow(
      <EditableTextWrapper
        value="Hello"
        onStopEditing={onStopEditingSpy}
        onStartEditing={onStartEditingSpy}
        onChange={onChangeSpy}
      >
        Hello
      </EditableTextWrapper>
    );
  });

  test('shows the default text initially', () => {
    expect(wrapper.find('.editable-text__text').text()).toEqual('Hello');
  });

  test('has an editable icon button initially', () => {
    expect(wrapper.find('.editable-text__button')).toHaveLength(1);
  });

  test('shows the editing view after clicking the .editable-text__button', () => {
    wrapper.find('.editable-text__button').prop('clickHandler')();
    wrapper.update();
    expect(wrapper.find('.editable-text__button')).toHaveLength(0);
  });

  test('shows the editing view after clicking the .editable-text__button', () => {
    wrapper.find('.editable-text__button').prop('clickHandler')();
    wrapper.update();
    expect(wrapper.find('.editable-text__button')).toHaveLength(0);
    expect(wrapper.find('.editable-text__wrapper--editing')).toHaveLength(1);
    expect(wrapper.find('.editable-text__input').prop('autoFocus')).toBe(true);
  });

  test('shows the editing view after clicking .editable-text_text', () => {
    wrapper.find('.editable-text__text').prop('onClick')();
    wrapper.update();
    expect(wrapper.find('.editable-text__button')).toHaveLength(0);
    expect(wrapper.find('.editable-text__wrapper--editing')).toHaveLength(1);
    expect(wrapper.find('.editable-text__input').prop('autoFocus')).toBe(true);
  });

  test('doesnt show the editing view after clicking .editable-text_text', () => {
    expect(wrapper.find('.editable-text__text').prop('onClick')).toEqual(
      wrapper.instance().startEditing
    );
    expect(wrapper.find('.editable-text__text').prop('onKeyUp')).toEqual(
      wrapper.instance().handleEditKeyPress
    );
    wrapper.setProps({ pencilEditOnly: true });
    wrapper.update();
    expect(wrapper.find('.editable-text__text').prop('onClick')).toEqual(null);
    expect(wrapper.find('.editable-text__text').prop('onKeyUp')).toEqual(null);
  });

  test('fires the onChangedHandler when the return key is pressed, returning the new value', () => {
    wrapper.find(Button).prop('clickHandler')(); // edit mode
    wrapper.update();
    wrapper
      .find('.editable-text__input')
      .hostNodes()
      .simulate('change', { target: { value: 'hey' } });
    wrapper.update();
    wrapper.find('.editable-text__input').simulate('keyDown', { keyCode: 13 });

    expect(onChangeSpy).toHaveBeenCalledWith('hey');
    expect(wrapper.find('.editable-text__button')).toHaveLength(1);
  });

  test('fires the onChangeHandler when when the text input looses focus', () => {
    wrapper.find(Button).prop('clickHandler')(); // edit mode
    wrapper.update();
    wrapper
      .find('.editable-text__input')
      .hostNodes()
      .simulate('change', { target: { value: 'yo' } });

    wrapper.update();
    wrapper.find('.editable-text__input').simulate('blur');

    expect(onChangeSpy).toHaveBeenCalledWith('yo');
    expect(wrapper.find('.editable-text__button')).toHaveLength(1);
  });

  test('returns the input to the non editing state when the esc key is pressed', () => {
    wrapper.find(Button).prop('clickHandler')(); // edit mode
    wrapper.update();
    wrapper
      .find('.editable-text__input')
      .hostNodes()
      .simulate('change', { target: { value: 'hey' } });
    wrapper.update();
    wrapper.find('.editable-text__input').simulate('keyDown', { keyCode: 27 });

    expect(onChangeSpy).not.toHaveBeenCalled();
    expect(wrapper.find('.editable-text__button')).toHaveLength(1);
  });

  test('updates the value stored in the state, when the value prop is updated by the parent', () => {
    expect(wrapper.state('value')).toEqual('Hello');

    wrapper.setProps({ value: 'New Value' });

    expect(wrapper.state('value')).toEqual('New Value');
  });

  test('renders the classNames', () => {
    wrapper.setProps({ className: 'lovely-class' });
    expect(wrapper.hasClass('lovely-class')).toEqual(true);
    wrapper.find('.editable-text__button').prop('clickHandler')();
    wrapper.update();
    expect(wrapper.hasClass('lovely-class--editing')).toEqual(true);
  });

  test('renders an ExpandingTextArea if multiline is true', () => {
    wrapper.setProps({ multiline: true });
    expect(wrapper.find(ExpandingTextArea)).toHaveLength(0);
    wrapper.find('.editable-text__text').prop('onClick')();
    wrapper.update();
    expect(wrapper.find(ExpandingTextArea)).toHaveLength(1);
  });
});
