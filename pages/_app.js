import "../styles/globals.css";
import Head from "next/head";
import {AnimatePresence, motion} from "framer-motion";

function MyApp({Component, pageProps, router}) {
  return (
    <>
      <Head>
        <title>SarvagK Portfolio </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
  );
}

export default MyApp;
