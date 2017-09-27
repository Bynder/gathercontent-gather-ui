import { React, expect, shallow, sinon } from '../setup';
import { EditableTextWrapper } from '../../lib';
import Button from '../../lib/Button';

describe('EditableTextWrapper', () => {
  let wrapper;
  let sandbox;
  let onChangeSpy;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    onChangeSpy = sinon.spy();
    wrapper = shallow(
      <EditableTextWrapper value="Hello" onChange={onChangeSpy}>
        Hello
      </EditableTextWrapper>
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('shows the default text initially', () => {
    expect(wrapper.find('.editable-text__text').text()).to.equal('Hello');
  });

  it('has an editable icon button initially', () => {
    expect(wrapper.find('.editable-text__button')).to.have.length(1);
  });

  it('shows the editing view after clicking the .editable-text__button', () => {
    wrapper.find('.editable-text__button').prop('clickHandler')();

    expect(wrapper.find('.editable-text__button')).to.have.length(0);
  });

  it('shows the editing view after clicking the .editable-text__button', () => {
    wrapper.find('.editable-text__button').prop('clickHandler')();

    expect(wrapper.find('.editable-text__button')).to.have.length(0);
    expect(wrapper.find('.editable-text__wrapper--editing')).to.have.length(1);
    expect(
      wrapper.find('.editable-text__input').prop('autoFocus')
    ).to.be.true();
  });

  it('fires the onChangedHandler when the return key is pressed, returning the new value', () => {
    wrapper.find(Button).prop('clickHandler')(); // edit mode

    wrapper
      .find('.editable-text__input')
      .simulate('change', { target: { value: 'hey' } });
    wrapper.find('.editable-text__input').simulate('keyDown', { keyCode: 13 });

    expect(onChangeSpy).to.have.been.calledWith('hey');
    expect(wrapper.find('.editable-text__button')).to.have.length(1);
  });

  it('returns the input to the non editing state when the esc key is pressed', () => {
    wrapper.find(Button).prop('clickHandler')(); // edit mode

    wrapper
      .find('.editable-text__input')
      .simulate('change', { target: { value: 'hey' } });
    wrapper.find('.editable-text__input').simulate('keyDown', { keyCode: 27 });

    expect(onChangeSpy).not.to.have.been.called();
    expect(wrapper.find('.editable-text__button')).to.have.length(1);
  });

  it('returns the input when the text input looses focus', () => {
    wrapper.find(Button).prop('clickHandler')(); // edit mode

    wrapper
      .find('.editable-text__input')
      .simulate('change', { target: { value: 'hey' } });
    wrapper.find('.editable-text__input').simulate('blur');

    expect(onChangeSpy).not.to.have.been.called();
    expect(wrapper.find('.editable-text__button')).to.have.length(1);
  });

  it('updates the value stored in the state, when the value prop is updated by the parent', () => {
    expect(wrapper.state('value')).to.equal('Hello');

    wrapper.setProps({ value: 'New Value' });

    expect(wrapper.state('value')).to.equal('New Value');
  });
});
