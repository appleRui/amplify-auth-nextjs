import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import awsExports from "../src/aws-exports";
import "../styles/globals.css";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({ ...awsExports });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Authenticator.Provider>
      <Component {...pageProps} />
    </Authenticator.Provider>
  );
}

export default withAuthenticator(App);