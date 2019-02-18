import { React, shallow } from '../setup';
import PageInformation from '../../lib/PageInformation';
import EditableTextWrapper from '../../lib/EditableTextWrapper';

describe('PageInformation', () => {
  let wrapper;

  test('always has a title', () => {
    wrapper = shallow(<PageInformation title="Hello World" />);
    expect(wrapper.find('.page-information__title').text()).toEqual(
      'Hello World'
    );
  });

  test('can have an optional text subtitle', () => {
    wrapper = shallow(<PageInformation title="Foo" subtitle="bar" />);
    expect(wrapper.find('.page-information__subtitle').text()).toEqual('bar');
  });

  test('can render a node as a subtitle', () => {
    const subtitle = (
      <span>
        Template:{' '}
        <span className="page-information__subtitle--highlight">hi</span>
      </span>
    );
    wrapper = shallow(<PageInformation title="Foo" subtitle={subtitle} />);
    expect(wrapper.find('.page-information__subtitle').text()).toEqual(
      'Template: hi'
    );
  });

  test('can have an editable title', () => {
    const renameSpy = jest.fn();
    wrapper = shallow(
      <PageInformation title="Original" editable rename={renameSpy} />
    );
    expect(wrapper.find(EditableTextWrapper)).toHaveLength(1);
    wrapper.find(EditableTextWrapper).prop('onChange')('foo');
    expect(renameSpy).toHaveBeenCalledWith('foo');
  });

  test('adds a title tag', () => {
    wrapper = shallow(<PageInformation title="Foo" subtitle="bar" />);
    expect(wrapper.find('.page-information__title').prop('title')).toEqual(
      'Foo'
    );
  });
});
