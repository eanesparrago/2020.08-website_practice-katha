import { useReducer } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import { SectionContext, sectionReducer } from "contexts/sectionContext";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  const [state, dispatch] = useReducer(sectionReducer, { currentSection: "services" });
  const value = { state, dispatch };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>

        <AnimatePresence exitBeforeEnter>
          <SectionContext.Provider value={value}>
            <Component {...pageProps} />
          </SectionContext.Provider>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
