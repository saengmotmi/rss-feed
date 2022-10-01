import type { AppProps } from "next/app";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
// @ts-ignore
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

import font from "styles/font";
import GlobalStyle from "styles/GlobalStyle";

import Layout from "components/components/Layout/Layout";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* width=device-width: 화면의 넓이를 디바이스의 넓이로 지정 */}
        {/* initial-scale=1: 초기 화면 배율 */}
        <title>RSS Feed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{font}</style>
      </Head>
      {/* 스타일 다 깨짐 */}
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ChakraProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </Hydrate>
      </QueryClientProvider>
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
