import type { AppProps } from "next/app";
import "../styles/globals.css";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} /> <ToastContainer position="bottom-right" />
      </ApolloProvider>
    </>
  );
}
export default MyApp;
