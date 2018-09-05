export const filterUsers = (users, term, searchByEmail = false) =>
  users.filter(
    user =>
      user.name
        .toLowerCase()
        .split(' ')
        .filter(subStr => subStr.lastIndexOf(term, 0) === 0).length > 0 ||
      user.display.toLowerCase().lastIndexOf(term, 0) === 0 ||
      (searchByEmail && user.email.toLowerCase().lastIndexOf(term, 0) === 0)
  );

export default filterUsers;
