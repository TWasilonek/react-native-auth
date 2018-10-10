export const login = ({ email, password }) => {
  // fake async http call returning user
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: email,
        email,
        password,
      });
    }, 300);
  });
}

export const signUp = ({ email, password }) => {
  // fake async http call returning user
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: email,
        email,
        password,
      });
    }, 300);
  });
}

export default {};
