import usersData from "../data/usersData";

export const getUsers = () => {
  return usersData;
};

export const addUser = (
  users,
  user
) => {
  return [
    ...users,
    {
      ...user,
      id: Date.now(),
    },
  ];
};

export const updateUser = (
  users,
  updatedUser
) => {
  return users.map(
    (user) =>
      user.id ===
      updatedUser.id
        ? updatedUser
        : user
  );
};

export const deleteUser = (
  users,
  id
) => {
  return users.filter(
    (user) =>
      user.id !== id
  );
};