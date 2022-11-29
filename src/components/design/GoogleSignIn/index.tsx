import React, { useEffect } from "react";
import Script from "next/script";
const CLIENT_ID =
  "813095886713-lop7tritb1tupn9qptqh0a44e3sktb3a.apps.googleusercontent.com";
import Head from "next/head";
import axios from "axios";
import { BE_URL } from "Config";
import Cookies from "js-cookie";

interface Props {
  callback: (res?: any) => void;
  variant: "signup" | "login";
}
const GoogleSignIn: React.FC<Props> = (props) => {
  useEffect(() => {
    //@ts-ignore
    window.onSignIn = (googleUser: any) => {
      console.log(googleUser);
      axios
        .post(BE_URL + `/loocale/user/${props.variant}/google`, {
          clientID: googleUser.credential,
        })
        .then((res) => {
          console.log(res);
          Cookies.set("token", res.data.data.token, { expires: 7});
          Cookies.set("username", res.data.data.user.username, { expires: 7});
          props.callback();
        })
        .catch((err) => {
          console.error(err);
        });
    };
  });

  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" async defer></Script>
      <div
        id="g_id_onload"
        data-client_id={CLIENT_ID}
        data-callback="onSignIn"
        data-auto_prompt="false"
        data-context="signup"
      ></div>
      <div
        className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
      ></div>
    </>
  );
};

export default GoogleSignIn;
