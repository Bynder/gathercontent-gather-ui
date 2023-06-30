import { React, shallow } from "../setup";
import { List, ListItem } from "../../lib";
import ListHead from "../../lib/List/ListHead";

describe("List", () => {
  let wrapper: any;

  const mockAction = <button type="button">test button</button>;

  beforeEach(() => {
    wrapper = shallow(
      <List title="Project name" action={mockAction}>
        {/* @ts-expect-error */}
        <ListItem title="row title" />
        {/* @ts-expect-error */}
        <ListItem title="row title" />
      </List>
    );
  });

  afterEach(() => {});

  test("renders a ListHead component", () => {
    const component = wrapper.find(ListHead);

    expect(component).toHaveLength(1);

    expect(component.prop("title")).toEqual("Project name");

    expect(component.prop("action")).toEqual(mockAction);
  });

  test("renders 2 children and surrounds them with a list__row div", () => {
    expect(wrapper.find(".list__row")).toHaveLength(2);
  });

  test('renders a modifier class of "--bordered-right"', () => {
    wrapper.setProps({ borderedRight: true });

    expect(wrapper.hasClass("list--bordered-right")).toEqual(true);
  });

  test('rendering a modifier class of "--bordered-left"', () => {
    wrapper.setProps({ borderedLeft: true });

    expect(wrapper.hasClass("list--bordered-left")).toEqual(true);
  });

  test('rendering a modifier class of "--bordered"', () => {
    wrapper.setProps({ bordered: true });

    expect(wrapper.hasClass("list--bordered")).toEqual(true);
  });

  test("rends a list subtitle", () => {
    expect(wrapper.find(".list__subtitle")).toHaveLength(0);
    wrapper.setProps({ subtitle: "Waffles" });

    expect(wrapper.find(".list__subtitle")).toHaveLength(1);

    expect(wrapper.find(".list__subtitle").text()).toEqual("Waffles");
  });
});
