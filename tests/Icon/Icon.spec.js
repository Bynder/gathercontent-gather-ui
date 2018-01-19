import { React, shallow } from '../setup';
import Icon from '../../lib/Icon';
import commentSVG from '../../assets/icons/comment.svg';
import plusCircleSVG from '../../assets/icons/plus-circle.svg';
import tickSVG from '../../assets/icons/tick.svg';
import trashSVG from '../../assets/icons/trash.svg';
import downloadSVG from '../../assets/icons/download.svg';
import fullScreenSVG from '../../assets/icons/fullscreen.svg';
import personSVG from '../../assets/icons/person.svg';
import keyboardSVG from '../../assets/icons/keyboard.svg';
import cogSvg from '../../assets/icons/cog.svg';

describe('Icon', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Icon className="custom-icon-class" name="comment" />);
  });

  afterEach(() => {});

  test('adds a className prop to classNames', () => {
    expect(wrapper.hasClass('custom-icon-class')).toEqual(true);
  });

  test('adds a BEM modifier with the name prop', () => {
    wrapper.setProps({ name: 'comment' });
    expect(wrapper.hasClass('icon--comment')).toEqual(true);
  });

  test('should render the comment icon', () => {
    wrapper.setProps({ name: 'comment' });
    expect(wrapper.find('svg').props()).toEqual(commentSVG().props);
  });

  test('should render the plus icon', () => {
    wrapper.setProps({ name: 'plusCircle' });
    expect(wrapper.find('svg').props()).toEqual(plusCircleSVG().props);
  });

  test('should render the tick icon', () => {
    wrapper.setProps({ name: 'tick' });
    expect(wrapper.find('svg').props()).toEqual(tickSVG().props);
  });

  test('should render the trash icon', () => {
    wrapper.setProps({ name: 'trash' });
    expect(wrapper.find('svg').props()).toEqual(trashSVG().props);
  });

  test('should render the download icon', () => {
    wrapper.setProps({ name: 'download' });
    expect(wrapper.find('svg').props()).toEqual(downloadSVG().props);
  });

  test('should render the full screen icon', () => {
    wrapper.setProps({ name: 'fullScreen' });
    expect(wrapper.find('svg').props()).toEqual(fullScreenSVG().props);
  });

  test('should render the person icon', () => {
    wrapper.setProps({ name: 'person' });
    expect(wrapper.find('svg').props()).toEqual(personSVG().props);
  });

  test('should render the keyboard icon', () => {
    wrapper.setProps({ name: 'keyboard' });
    expect(wrapper.find('svg').props()).toEqual(keyboardSVG().props);
  });

  test('should render the cog icon', () => {
    wrapper.setProps({ name: 'cog' });
    expect(wrapper.find('svg').props()).toEqual(cogSvg().props);
  });

  test('adds a modifier class of icon--hide-text', () => {
    wrapper.setProps({ hideText: true });
    expect(wrapper.hasClass('icon--hide-text')).toEqual(true);
  });

  test('only renders icon__text when props.text has been set', () => {
    expect(wrapper.find('.icon__text')).toHaveLength(0);
    wrapper.setProps({ text: 'hello world' });
    expect(wrapper.find('.icon__text')).toHaveLength(1);
    expect(wrapper.find('.icon__text').text()).toBe('hello world');
  });
});
