import { BE_URL } from "Config";
import Cookies from "js-cookie";
import { useRef, useEffect } from "react";
import request from "src/services/request";
//declare const google: any;
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

interface GoogleSSOProps {
  variant: "signup" | "login";
  callback?: (res?: any) => void;
}
const GoogleSSO: React.FC<GoogleSSOProps> = (props) => {
  const onSuccessHandler = (credentialResponse: CredentialResponse) => {
    request
      .post(BE_URL + `/user/${props.variant}/google`, {
        clientID: credentialResponse.credential,
      })
      .then((res) => {
				console.log(res)
        Cookies.set("token", res.data.user.token, { expires: 7 });
        if (props.callback) {
          props.callback();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return <GoogleLogin onSuccess={(credResponse) => onSuccessHandler(credResponse)} />;
};

export default GoogleSSO;
