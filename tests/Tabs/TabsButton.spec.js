import { React, shallow } from '../setup';
import { Tabs } from '../../lib';

describe('Tabs Button', () => {
  const onClickSpy = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tabs.Button onClick={onClickSpy}>+</Tabs.Button>);
  });

  test('renders children', () => {
    expect(wrapper.text()).toEqual('+');
  });

  test('calls the onClick prop', () => {
    wrapper.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
