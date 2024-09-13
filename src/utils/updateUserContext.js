const updateUserContext = (setUserInfo, token, email) => {
  setUserInfo((prevState) => {
    return {
      ...prevState,
      accessToken: token,
      email,
    };
  });
};

export default updateUserContext;
