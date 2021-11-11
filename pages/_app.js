import '../styles/globals.css'
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";


const messages = {
  en: { name: "English Films" },
  fr: { name: "French Films" },
  es: { name: "Es Films" },
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Component {...pageProps} />
      </IntlProvider>
  );
}

export default MyApp
