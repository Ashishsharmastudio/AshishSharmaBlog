import { Html, Head, Main, NextScript } from "next/document";
// import ogImage from '../public/opengraph-image.png';

export default function Document() {
  let GTM_ID = process.env.NEXT_PUBLIC_GTMhost_ID;

  return (
    <Html lang="en">
      <Head>
      {/* open graph tag */}
      <meta property="og:title" content="Tech Blog Service - Honest Unbiased Tech Product Reviews" />
          <meta property="og:description" content="Tech Blog Service provides detailed, honest, and unbiased reviews of 
           the latest tech products in India and globally. We deeply research and test phones, laptops, TVs, audio devices,
           smart home devices and more to provide comprehensive analysis and comparisons. Read our in-depth tech product 
           reviews and determine the best gadgets in various price ranges and categories before buying. Follow Tech Blog 
           Service to stay updated on new product launches and make smart purchasing decisions that get you the most 
           value" />
          <meta property="og:type" content="Blog Website"/>
          <meta property="og:url" content="https://ashishsharmablog.tech/" />
          <meta property="og:image" content="/public/opengraph-image.png" />  
        {/* GTM head snippet */}
        <script 
        async
        src={'https://www.googletagmanager.com/gtag/js?id=${GTM_ID}'}
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
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MPC7B725');` }} />
      </body>
    </Html>
  );
}
