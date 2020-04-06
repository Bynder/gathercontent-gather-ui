import { Alert } from 'react-bootstrap/lib';
import { React, mount } from '../../setup';
import NotificationBar from '../../../lib/Notification/bar';
import Button from '../../../lib/Button';
import Icon from '../../../lib/Icon';

describe('Notification', () => {
  let wrapper;
  let onCloseSpy;

  beforeEach(() => {
    onCloseSpy = jest.fn();
    wrapper = mount(<NotificationBar level="warning">Dummy</NotificationBar>);
  });

  test('renders an Alert component', () => {
    expect(wrapper.find(Alert)).toHaveLength(1);
  });

  test('renders children', () => {
    expect(wrapper.contains('Dummy')).toEqual(true);
  });

  test('renders the correct level class', () => {
    expect(
      wrapper.find(Alert).hasClass('bg-yellow-primary text-neutral-20')
    ).toEqual(true);
    wrapper.setProps({ level: 'danger' });
    expect(wrapper.find(Alert).hasClass('bg-red-primary text-white')).toEqual(
      true
    );
    wrapper.setProps({ level: 'information' });
    expect(wrapper.find(Alert).hasClass('bg-blue-primary text-white')).toEqual(
      true
    );
    wrapper.setProps({ level: 'promo' });
    expect(
      wrapper.find(Alert).hasClass('bg-purple-primary text-white')
    ).toEqual(true);
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
