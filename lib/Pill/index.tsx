import React from "react";
import { oneOf } from "prop-types";
import { propTypes, defaultProps, types, sizes } from "./common";
import PillDefault from "./PillDefault";
import PillRed from "./PillRed";
import PillGreen from "./PillGreen";
import PillPurple from "./PillPurple";
import PillGreenWhiteText from "./PillGreenWhiteText";
import PillBlueWhiteText from "./PillBlueWhiteText";
import PillYellow from "./PillYellow";
import { PillBeta } from "./PillBeta";

export const Pill = ({ type, children, ...rest }: any) => {
  const getPill = () => {
    switch (type) {
      case types.red:
        return PillRed;
      case types.green:
        return PillGreen;
      case types.purple:
        return PillPurple;
      case types.yellow:
        return PillYellow;
      case types.greenWhiteText:
        return PillGreenWhiteText;
      case types.blueWhiteText:
        return PillBlueWhiteText;
      case types.beta:
        return PillBeta;
      default:
        return PillDefault;
    }
  };
  const PillType = getPill();

  return <PillType {...rest}>{children}</PillType>;
};

Pill.propTypes = {
  ...propTypes,
  type: oneOf(Object.keys(types)),
};

Pill.defaultProps = {
  ...defaultProps,
  type: types.default,
};

Pill.types = types;

Pill.sizes = sizes;

export default Pill;
