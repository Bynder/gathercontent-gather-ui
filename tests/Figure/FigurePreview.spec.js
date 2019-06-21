import { React, shallow } from '../setup';
import { Icon } from '../../lib/index';
import FigurePreview from '../../lib/Figure/FigurePreview';

describe('FigurePreview', () => {
  let wrapper;

  const props = {
    label: 'Field notes',
    fileExtension: 'txt'
  };

  beforeEach(() => {
    wrapper = shallow(<FigurePreview {...props} />);
  });

  test('renders the file format extension as the title and adds a modifier', () => {
    wrapper.setProps({ previewSrc: '' });
    expect(wrapper.find('.figure__title').contains('txt')).toEqual(true);
  });

  test('rendering the processing state (uploading & processing)', () => {
    wrapper.setProps({
      previewSrc: 'http',
      progress: 10
    });

    expect(wrapper.find('.figure__progress').text()).toBe('10%');
    expect(wrapper.find('.figure__loader-text').text()).toBe('Uploading');

    wrapper.setProps({ progress: 100 });
    expect(wrapper.find('.figure__loader-text').text()).toBe('Processing');
  });

  test('rendering the loading state', () => {
    wrapper.setProps({ previewSrc: 'http' });
    expect(wrapper.find(Icon)).toHaveLength(1);
  });

  test('renders an element with the correct src', () => {
    wrapper.setProps({
      previewSrc: 'http',
      showPreview: true
    });
    expect(wrapper.find('.figure__thumbnail').props().style).toEqual({
      backgroundImage: `url("http")`
    });
  });
});
