import { Alert } from 'react-bootstrap/lib';
import { React, shallow } from './setup';
import Notification from '../lib/Notification';
import Button from '../lib/Button';
import Icon from '../lib/Icon';

describe('Notification', () => {
  let wrapper;
  let clickHandlerSpy;
  let onCloseSpy;

  beforeEach(() => {
    clickHandlerSpy = jest.fn();
    onCloseSpy = jest.fn();
    wrapper = shallow(<Notification level="warning">Dummy</Notification>);
  });

  test('renders an Alert component', () => {
    expect(wrapper.find(Alert)).toHaveLength(1);
  });

  test('renders children', () => {
    expect(wrapper.contains('Dummy')).toEqual(true);
  });

  test('renders the correct level class', () => {
    expect(
      wrapper.find(Alert).hasClass('notification notification--warning')
    ).toEqual(true);
  });

  test('adds the className prop', () => {
    wrapper.setProps({
      className: 'waffles'
    });
    expect(wrapper.find(Alert).hasClass('waffles')).toEqual(true);
  });

  test('passes the clickHandler prop to the Alert component and adds class', () => {
    wrapper.setProps({
      clickHandler: clickHandlerSpy
    });
    expect(wrapper.find(Alert).prop('onClick')).toEqual(clickHandlerSpy);
    expect(wrapper.find(Alert).hasClass('has-click-handler')).toEqual(true);
  });

  test('adds a centred modifier', () => {
    wrapper.setProps({ center: true });
    expect(wrapper.find(Alert).hasClass('notification--centred')).toEqual(true);
  });

  test('adds a close button', () => {
    expect(wrapper.find(Button)).toHaveLength(0);
    expect(wrapper.find(Icon)).toHaveLength(0);
    wrapper.setProps({ onClose: onCloseSpy });
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Button).prop('onClick')).toEqual(onCloseSpy);
    expect(wrapper.find(Icon)).toHaveLength(1);
  });
});
