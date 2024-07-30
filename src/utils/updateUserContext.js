const updateUserContext = (setUserInfo, token) => {
  setUserInfo((prevState) => {
    return {
      ...prevState,
      accessToken: token,
    };
  });
};

export default updateUserContext;
