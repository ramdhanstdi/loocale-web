import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  type DehydratedState,
} from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <GoogleOAuthProvider clientId="813095886713-lop7tritb1tupn9qptqh0a44e3sktb3a.apps.googleusercontent.com">
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
					<Toaster position="bottom-left" toastOptions={{
						duration: 2000,
						style: {
							background: "#000",
							color: "#fff",
						}
					}}/>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;
