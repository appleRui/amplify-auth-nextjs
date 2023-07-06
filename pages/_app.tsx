import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import awsExports from "../src/aws-exports";
import "../styles/globals.css";
import '@aws-amplify/ui-react/styles.css';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui';
import { jaTranslate } from "../i18n/ja";

// Amplifyの設定
Amplify.configure({ ...awsExports });
I18n.putVocabularies(translations);
I18n.putVocabularies(jaTranslate);
I18n.setLanguage('ja');

const App = ({ Component, pageProps }: AppProps) => {
  return (
    // 認証用コンポーネント
    // 認証がされていない場合、認証用コンポーネントが表示される
    <Authenticator.Provider>
      <Component {...pageProps} />
    </Authenticator.Provider>
  );
}

export default withAuthenticator(App);