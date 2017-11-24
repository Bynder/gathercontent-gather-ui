import UAParser from 'ua-parser-js';
import { React, expect, mount } from '../setup';
import { ShortcutCommandKey } from '../../lib';

describe('Shortcut/ShortcutCommandKey', () => {
  let wrapper;
  const ua = new UAParser();

  it('renders a ⌘ for Mac OS', () => {
    ua.setUA(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36'
    );
    wrapper = mount(<ShortcutCommandKey UAParser={ua} />);
    expect(wrapper.text()).to.equal('⌘');
  });

  it('renders a Ctrl for everything else', () => {
    ua.setUA(
      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0'
    );
    wrapper = mount(<ShortcutCommandKey UAParser={ua} />);
    expect(wrapper.text()).to.equal('Ctrl');
  });
});
