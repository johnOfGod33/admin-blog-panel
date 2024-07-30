import UseUserContext from "../Hooks/UseUserContext";

const updateUserContext = (token) => {
  const { setUserInfo } = UseUserContext();

  setUserInfo((prevState) => {
    return {
      ...prevState,
      accessToken: token,
    };
  });
};

export default updateUserContext;
