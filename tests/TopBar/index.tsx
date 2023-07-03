import { TopBar, NotificationBar } from "lib";
import { React, shallow } from "../setup";

describe("TopBar", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <TopBar>
        <div className="test">Test child</div>
      </TopBar>
    );
  });

  afterEach(() => {});

  test("renders its children", () => {
    expect(wrapper.find(".test")).toHaveLength(1);
  });

  test("adds a fixed class when fixed prop is there", () => {
    wrapper.setProps({
      fixed: true,
    });

    expect(wrapper.find(".top-bar__wrapper--fixed")).toHaveLength(1);
  });

  test("adds a dark class when useDarkTheme prop is true", () => {
    expect(wrapper.find(".top-bar--dark")).toHaveLength(0);
    wrapper.setProps({
      useDarkTheme: true,
    });

    expect(wrapper.find(".top-bar--dark")).toHaveLength(1);
  });

  test("renders a notification", () => {
    expect(wrapper.find(NotificationBar)).toHaveLength(0);
    wrapper.setProps({
      notification: <NotificationBar level="danger">Hello!!!</NotificationBar>,
    });

    expect(wrapper.find(NotificationBar)).toHaveLength(1);
  });
});
