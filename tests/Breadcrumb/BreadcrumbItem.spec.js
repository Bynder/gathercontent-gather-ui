import { React, shallow } from '../setup';
import { Breadcrumb } from '../../lib';

describe('Breadcrumb.Item', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Breadcrumb.Item className="test">
        <a href="/">Test 1</a>
      </Breadcrumb.Item>
    );
  });

  test('renders a link', () => {
    expect(wrapper.find('a')).toHaveLength(1);
  });
});
