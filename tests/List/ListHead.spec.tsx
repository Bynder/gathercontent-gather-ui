import { React, shallow } from "../setup";
import ListHead from "../../lib/List/ListHead";

describe("List Head", () => {
  let wrapper: any;

  const mockAction = <button type="button">test button</button>;

  beforeEach(() => {
    wrapper = shallow(<ListHead title="Project name" action={mockAction} />);
  });

  afterEach(() => {});

  test("renders the title", () => {
    expect(wrapper.contains("Project name")).toEqual(true);
  });

  test("renders the action", () => {
    expect(wrapper.contains(mockAction)).toEqual(true);
  });
});
