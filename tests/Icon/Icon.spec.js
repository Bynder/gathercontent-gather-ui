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
import attachmentSVG from './../../assets/icons/attachment.svg';
import checkboxSVG from './../../assets/icons/checkbox.svg';
import guidelineSVG from './../../assets/icons/guideline.svg';
import radioSVG from './../../assets/icons/radio.svg';
import textSVG from './../../assets/icons/text.svg';
import upSVG from './../../assets/icons/up.svg';
import downSVG from './../../assets/icons/down.svg';
import crossSVG from './../../assets/icons/cross.svg';
import clockSVG from './../../assets/icons/clock.svg';
import warningSVG from './../../assets/icons/warning.svg';

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

  test('should render the attachment icon', () => {
    wrapper.setProps({ name: 'attachment' });
    expect(wrapper.find('svg').props()).toEqual(attachmentSVG().props);
  });

  test('should render the checkbox icon', () => {
    wrapper.setProps({ name: 'checkbox' });
    expect(wrapper.find('svg').props()).toEqual(checkboxSVG().props);
  });

  test('should render the guideline icon', () => {
    wrapper.setProps({ name: 'guideline' });
    expect(wrapper.find('svg').props()).toEqual(guidelineSVG().props);
  });

  test('should render the radio icon', () => {
    wrapper.setProps({ name: 'radio' });
    expect(wrapper.find('svg').props()).toEqual(radioSVG().props);
  });

  test('should render the text icon', () => {
    wrapper.setProps({ name: 'text' });
    expect(wrapper.find('svg').props()).toEqual(textSVG().props);
  });

  test('should render the up icon', () => {
    wrapper.setProps({ name: 'up' });
    expect(wrapper.find('svg').props()).toEqual(upSVG().props);
  });

  test('should render the down icon', () => {
    wrapper.setProps({ name: 'down' });
    expect(wrapper.find('svg').props()).toEqual(downSVG().props);
  });

  test('should render the cross icon', () => {
    wrapper.setProps({ name: 'cross' });
    expect(wrapper.find('svg').props()).toEqual(crossSVG().props);
  });

  test('should render the clock icon', () => {
    wrapper.setProps({ name: 'clock' });
    expect(wrapper.find('svg').props()).toEqual(clockSVG().props);
  });

  test('should render the waning icon', () => {
    wrapper.setProps({ name: 'warning' });
    expect(wrapper.find('svg').props()).toEqual(warningSVG().props);
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

  test('adds a notification', () => {
    expect(wrapper.hasClass('icon--has-notification')).toEqual(false);
    expect(wrapper.find('.icon__notification')).toHaveLength(0);
    wrapper.setProps({ notification: 2 });
    expect(wrapper.hasClass('icon--has-notification')).toEqual(true);
    expect(wrapper.find('.icon__notification')).toHaveLength(1);
  });
});
