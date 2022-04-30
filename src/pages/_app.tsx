import type { AppProps } from "next/app";
import Head from "next/head";
import dynamic from "next/dynamic";
// @ts-ignore
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* width=device-width: 화면의 넓이를 디바이스의 넓이로 지정 */}
        {/* initial-scale=1: 초기 화면 배율 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
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
