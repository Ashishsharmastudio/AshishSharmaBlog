import { Html, Head, Main, NextScript } from "next/document";
// import ogImage from '../public/opengraph-image.png';

export default function Document() {
  let GTM_ID = process.env.NEXT_PUBLIC_GTMhost_ID;

  return (
    <Html lang="en">
      <Head>
        {/* open graph tag */}
        <meta
          property="og:title"
          content="Tech Traveler - AI and Tech Stocks, Reviews, Travel Tips"
        />
        {/* <!-- Primary Keyword: Tech Stocks --> */}
        <meta
          property="og:title"
          content="Tech Blog - Latest Trends and Analysis on Tech Stocks"
        />

        <meta
          property="og:description"
          content="Get the latest news, tips, and in-depth analysis on trending tech stocks. Our experts review top performing technology companies and emerging stock opportunities."
        />

        {/* <!-- Primary Keyword: AI Technology -->  */}
        <meta
          property="og:title"
          content="Tech Blog - AI and Machine Learning Innovations"
        />

        <meta
          property="og:description"
          content="Discover the newest breakthroughs in AI and machine learning. We cover the latest trends and developments in artificial intelligence technologies."
        />

        {/* <!-- Primary Keyword: Tech Product Reviews --> */}
        <meta
          property="og:title"
          content="Tech Blog - Unbiased Tech Product Reviews"
        />

        <meta
          property="og:description"
          content="Honest, in-depth reviews of the newest tech gadgets and devices. We thoroughly test and compare smartphones, laptops, TVs, and more."
        />
        <meta property="og:type" content="Blog Website" />
        <meta property="og:url" content="https://ashishsharmablog.tech/" />
        <meta property="og:image" content="/public/opengraph-image.png" />
        {/* GTM head snippet */}
        <script
          async
          src={"https://www.googletagmanager.com/gtag/js?id=${GTM_ID}"}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTM_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          contect="google43ef5e51dd2930b5.html"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* GTM body snippet */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MPC7B725');`,
          }}
        />
      </body>
    </Html>
  );
}
