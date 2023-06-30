import { React, shallow } from "../setup";
import Label from "../../lib/Form/Label";
import Input from "../../lib/Form/Checkbox/Input";
import Checkbox from "../../lib/Form/Checkbox";

describe("Checkbox", () => {
  test("has a label and an input", () => {
    const wrapper = shallow(
      // @ts-expect-error TS(2709): Cannot use namespace 'Checkbox' as a type.
      <Checkbox id="123" label="Click me" name="input name" />
    );

    expect(wrapper.find(Label)).toHaveLength(1);

    expect(wrapper.find(Input)).toHaveLength(1);
  });
});
