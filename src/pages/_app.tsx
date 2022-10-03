import type { AppProps } from "next/app";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  type DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
// @ts-ignore
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import font from "styles/font";
import GlobalStyle from "styles/GlobalStyle";
import Layout from "components/common/Layout/Layout";

const queryClient = new QueryClient();

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  return (
    <>
      <Head>
        {/* width=device-width: 화면의 넓이를 디바이스의 넓이로 지정 */}
        {/* initial-scale=1: 초기 화면 배율 */}
        <title>RSS Feed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{font}</style>
      </Head>
      {/* <Script
        src="https://kit.fontawesome.com/60a6871909.js"
        crossOrigin="anonymous"
      /> */}
      {/* 스타일 다 깨짐 */}
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
      <ToastContainer theme="colored" />
      <AnimatedCursor
        // @ts-ignore
        innerSize={15}
        outerSize={8}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={["a"]}
      />
    </>
  );
}

export default MyApp;
