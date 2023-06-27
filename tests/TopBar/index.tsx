import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'TopBa... Remove this comment to see the full error message
import { TopBar, NotificationBar } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("TopBar", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <TopBar>
        <div className="test">Test child</div>
      </TopBar>
    );
  });

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {});

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders its children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".test")).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds a fixed class when fixed prop is there", () => {
    wrapper.setProps({
      fixed: true,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".top-bar__wrapper--fixed")).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds a fixed class when the scrollFixed state is true", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".top-bar__wrapper--fixed")).toHaveLength(0);
    wrapper.setState({
      scrollFixed: true,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".top-bar__wrapper--fixed")).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds a dark class when useDarkTheme prop is true", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".top-bar--dark")).toHaveLength(0);
    wrapper.setProps({
      useDarkTheme: true,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".top-bar--dark")).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a notification", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(NotificationBar)).toHaveLength(0);
    wrapper.setProps({
      notification: <NotificationBar level="danger">Hello!!!</NotificationBar>,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(NotificationBar)).toHaveLength(1);
  });
});
