import axios from "axios";
import { BE_URL } from "Config";

export const fullnameValidation = (fullname: string) => {
  return (
    fullname.length <= 50 &&
    fullname.length > 0 &&
    /^[a-zA-Z ]*$/.test(fullname)
  );
};

export const usernameValidation = async (username: string) => {
  const isUsernameValid = username.length <= 16 && /^[\w\.]+$/.test(username);
  if (isUsernameValid) {
    try {
      await axios.post(BE_URL + "/user/validate/username", {
        user_name: username,
      });
      return true;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
};
