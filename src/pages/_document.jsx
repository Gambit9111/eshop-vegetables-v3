import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-myGreen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
