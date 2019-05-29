import { React, shallow } from '../setup';
import { ImageLoader } from '../../lib';

describe('ImageLoader', () => {
  let wrapper;
  const onLoadSpy = jest.fn();
  const onErrorSpy = jest.fn();

  jest.useFakeTimers();

  beforeEach(() => {
    wrapper = shallow(
      <ImageLoader
        alt="alt text"
        src="/src/"
        onLoad={onLoadSpy}
        onError={onErrorSpy}
        title="hello world"
      />
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('sets the loaded state when the image loads', () => {
    wrapper.find('img').prop('onLoad')();
    wrapper.update();
    expect(wrapper.state('imageHasLoaded')).toBe(true);
    expect(onLoadSpy).toHaveBeenCalled();
  });

  test('sets the errored state when the image fails to load', () => {
    wrapper.find('img').prop('onError')();
    wrapper.update();
    expect(wrapper.state('imageHasErrored')).toBe(true);
    expect(onErrorSpy).toHaveBeenCalled();
  });

  test('spreads the rest of the props onto the image', () => {
    expect(wrapper.find('img').prop('title')).toBe('hello world');
  });
});
