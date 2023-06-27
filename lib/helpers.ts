export const pluralisePerson = (count: any) => count === 1 ? `${count} person` : `${count} people`;

export const pluraliseHas = (count: any) => count === 1 ? 'has' : 'have';

export const filterUsers = (users: any, term: any, searchByEmail = false) => {
  const safeTerm = term.toLowerCase();
  return users.filter(
    (user: any) => user.name
      .toLowerCase()
      .split(' ')
      .filter((subStr: any) => subStr.lastIndexOf(safeTerm, 0) === 0).length > 0 ||
    user.name.toLowerCase().lastIndexOf(safeTerm, 0) === 0 ||
    user.display.toLowerCase().lastIndexOf(safeTerm, 0) === 0 ||
    (searchByEmail && user.email.toLowerCase().lastIndexOf(safeTerm, 0) === 0)
  );
};
