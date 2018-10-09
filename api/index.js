export const login = ({ email, password }) => {
  // fake async http call returning user
  console.log('in api: ', email, password);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ 
        username: email,
        password
      });
    }, 300);
  });
}

export default {};
