export const pluralisePerson = (count: any) =>
  count === 1 ? `${count} person` : `${count} people`;

export const pluraliseHas = (count: any) => (count === 1 ? "has" : "have");

export const filterUsers = (users: any, term: any, searchByEmail = false) => {
  const safeTerm = term.toLowerCase();
  return users.filter(
    (user: any) =>
      user.name
        .toLowerCase()
        .split(" ")
        .filter((subStr: any) => subStr.lastIndexOf(safeTerm, 0) === 0).length >
        0 ||
      user.name.toLowerCase().lastIndexOf(safeTerm, 0) === 0 ||
      user.display.toLowerCase().lastIndexOf(safeTerm, 0) === 0 ||
      (searchByEmail && user.email.toLowerCase().lastIndexOf(safeTerm, 0) === 0)
  );
};

export const toPixels = (value: string | number, percentageOf = 100) => {
  if (typeof value === "number") return value;

  const integer = parseInt(value, 10);

  if (value.endsWith("px")) {
    return integer;
  }

  if (value.endsWith("%")) {
    return (percentageOf / 100) * integer;
  }

  console.warn(
    `Could not interpret a normalised value for: ${value}.\nParsing directly to integer: ${integer}.`
  );
  return integer;
};

export const keepValueWithinRange = (
  start: number,
  min?: number,
  max?: number
) => {
  let value = start;
  if (typeof max === "number") value = Math.min(value, max);
  if (typeof min === "number") value = Math.max(value, min);
  return value;
};
