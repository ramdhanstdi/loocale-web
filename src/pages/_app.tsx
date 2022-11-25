import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  //gapi.load("client:auth2", () => {
  //  gapi.client.init({
  //    clientId:
  //      "813095886713-lop7tritb1tupn9qptqh0a44e3sktb3a.apps.googleusercontent.com",
  //    plugin_name: "chat",
  //  });
  //});
  return (
    //<GoogleOAuthProvider clientId="813095886713-lop7tritb1tupn9qptqh0a44e3sktb3a.apps.googleusercontent.com">
    <Component {...pageProps} />
    //</GoogleOAuthProvider>
  );
}

export default MyApp;
