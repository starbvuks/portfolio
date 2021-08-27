import "../styles/globals.css";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { MoonLoader } from "react-spinners";

const override = css`
  display: absolute;
  position: fixed;
  left: 47%;
  top: 45%;
`;

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

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);

  return (
    <>
      <Head>
        <title>SarvagK Portfolio </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <MoonLoader
          css={override}
          loading={loading}
          size={50}
          color="#F3EFE3"
        />
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
