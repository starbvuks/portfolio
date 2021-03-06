import "../styles/globals.css";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { MoonLoader } from "react-spinners";

const override = css``;

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <Head>
        <title>SarvagK Portfolio </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Sarvag Kalari's Portfolio" />
        <meta
          name="keywords"
          content="React, Web Dev, Next, Javascript, Html, Css"
        />
        <meta name="theme-color" content="#AB3B61" />
        <meta name="author" content="Sarvag Kalari" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/img/sk-logo-portfolio.png" />
        <meta property="og:title" content="Sarvag Kalari's Portfolio" />
        <meta
          property="og:url"
          content="https://portfolio-starbvuks.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </Head>
      {loading ? (
        <div class="flex h-screen items-center justify-center">
          <MoonLoader
            css={override}
            loading={loading}
            size={50}
            color="#AB3B61"
          />
        </div>
      ) : (
        <>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={router.route}
              initial="pageInitial"
              animate="pageAnimate"
              exit="pageExit"
              variants={{
                pageInitial: {
                  opacity: 0,
                },
                pageAnimate: {
                  opacity: 1,
                },
                pageExit: {
                  opacity: 0,
                },
              }}
            >
              <Component import {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default MyApp;
