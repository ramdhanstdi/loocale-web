import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      staleTime: 86400,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  //gapi.load("client:auth2", () => {
  //  gapi.client.init({
  //    clientId:
  //      "813095886713-lop7tritb1tupn9qptqh0a44e3sktb3a.apps.googleusercontent.com",
  //    plugin_name: "chat",
  //  });
  //});
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
    //</GoogleOAuthProvider>
  );
}

export default MyApp;
