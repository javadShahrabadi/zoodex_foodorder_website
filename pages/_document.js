import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa-IR">
      <Head>
        {/* font */}
        <link
          href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css"
          rel="stylesheet"
          type="text/css"
        ></link>
        {/* font */}
        {/* fav icon */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://zoodex.ir/favicon.svg"
        ></link>
        {/* fav icon */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
