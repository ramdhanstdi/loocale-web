import { BE_URL } from "Config";
import Cookies from "js-cookie";
import { useRef, useEffect } from "react";
import request from "src/services/request";
declare const google: any;

interface GoogleSSOProps {
	variant: "signup" | "login";
	callback?: (res?: any) => void;
}
const GoogleSSO:React.FC<GoogleSSOProps> = (props) => {
  const g_sso = useRef(null);

  useEffect(() => {
    if (g_sso.current) {
      google.accounts.id.initialize({
        client_id: "813095886713-lop7tritb1tupn9qptqh0a44e3sktb3a.apps.googleusercontent.com",
        callback: (res: any, error: any) => {
          // This is the function that will be executed once the authentication with google is finished
          request
            .post(BE_URL + `/user/${props.variant}/google`, {
              clientID: res.credential,
            })
            .then((res) => {
              Cookies.set("token", res.data.token, { expires: 7 });
							if (props.callback) {
								props.callback();
							}
            })
            .catch((err) => {
              console.error(err);
            });
        },
      });
      google.accounts.id.renderButton(g_sso.current, {
        theme: "outline",
        size: "large",
        type: "standard",
        text: "signin_with",
        shape: "rectangular",
        logo_alignment: "left",
        width: "220",
      });
    }
  });

  return <div ref={g_sso} />;
};

export default GoogleSSO;
