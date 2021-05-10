function showSalary(users, currentAge) {
  let result = users
    .filter(({ age }) => age <= currentAge) 
    .map ((users) => `${users.name},` + ` ${users.balance}`)
    .join ('\n');

  return result;
}
