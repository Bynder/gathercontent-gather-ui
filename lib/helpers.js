export const pluralisePerson = count =>
  count === 1 ? `${count} person` : `${count} people`;

export const pluraliseHas = count => (count === 1 ? 'has' : 'have');

export const filterUsers = (users, term, searchByEmail = false) => {
  const safeTerm = term.toLowerCase();
  return users.filter(
    user =>
      user.name
        .toLowerCase()
        .split(' ')
        .filter(subStr => subStr.lastIndexOf(safeTerm, 0) === 0).length > 0 ||
      user.name.toLowerCase().lastIndexOf(safeTerm, 0) === 0 ||
      user.display.toLowerCase().lastIndexOf(safeTerm, 0) === 0 ||
      (searchByEmail && user.email.toLowerCase().lastIndexOf(safeTerm, 0) === 0)
  );
};
