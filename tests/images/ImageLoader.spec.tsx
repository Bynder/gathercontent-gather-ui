import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Image... Remove this comment to see the full error message
import { ImageLoader } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("ImageLoader", () => {
  let wrapper: any;
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const onLoadSpy = jest.fn();
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const onErrorSpy = jest.fn();

  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  jest.useFakeTimers();

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
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

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    jest.resetAllMocks();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("sets the loaded state when the image loads", () => {
    wrapper.find("img").prop("onLoad")();
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("imageHasLoaded")).toBe(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onLoadSpy).toHaveBeenCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("sets the errored state when the image fails to load", () => {
    wrapper.find("img").prop("onError")();
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("imageHasErrored")).toBe(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onErrorSpy).toHaveBeenCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("spreads the rest of the props onto the image", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("img").prop("title")).toBe("hello world");
  });
});
