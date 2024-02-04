import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const About = () => {
  return (
    <div>
      {/* Header file added */}
      <Head>
        <title>Ashish Blog | About Us</title>
        <link rel="icon" href="/smallLogo.jpg" />
        <meta
          name="description"
          content="Ashish Sharma Blog is run by a team of knowledgeable tech enthusiasts who provide unbiased reviews and advice. Learn more about our experienced editors and tech experts."
        />
        <meta
          name="keywords"
          content="Ashish Sharma Blog, tech reviews, electronics, gadgets, technology, editors, authors, writers, tech enthusiasts, experts, about us, buy a phone, Buy a laptop, best suggestion in a smartphone, best affordable price phone buy, buy gaming pc"
        />
        <meta name="author" content="Ashish Sharma" />
        <meta name="language" content="English" />
      </Head>

      <Header />

      <div className="w-full mx-auto p-5 bg-secondaryColor/10">
        <h1 className="text-black text-5xl font-bold m-8">About Us</h1>
        <h3 className="ml-8 text-lg">
          Ashish Sharma Blog is dedicated to helping tech users of all experience levels get more from the hardware and software that's central to a PC-centric universe. We focus on:
          <ul>
            <li>Mainstream PCs</li>
            <li>Gaming PCs and accessories, graphics cards, and PC games</li>
            <li>The latest chips from Intel, AMD, and Nvidia</li>
            <li>WiFi routers, SSDs, keyboards, mice, and other PC components and accessories</li>
            <li>Windows, Office, and other essential PC apps and utilities, from productivity to security</li>
          </ul>
          Ashish Sharma Blog also covers all things Android, the one mobile ecosystem that's deep and customizable—just like a PC. With incredible product knowledge built from years covering the consumer tech industry, PCWorld is uniquely positioned to tell savvy users what to buy and how to get more from their purchases.
        </h3>
        <h2 className="text-black text-3xl font-bold m-8">Affiliate Disclosures</h2>
        <span className="text-gray-600 ml-8 font-bold">FTC Disclosure Compliance Rules</span>
        <p className="ml-8 text-lg mb-3">
          In 2015, the Federal Trade Commission released their new rules for Disclosure Compliance.
        </p>
        <p className="ml-8 text-lg mb-3">
          These rules are set in place to ensure that readers or viewers of web media are aware if the blogger or publisher is sponsored, endorsed, or partnered with a different company. The readers need to know if the content publisher is making money by sharing a link or product.
        </p>
        <p className="ml-8 text-lg mb-3">
          In compliance with the FTC guidelines, please assume the following about links and posts on Ashish Sharma Blog.in:
        </p>
        <p className="ml-8 text-lg mb-3">
          Any/all of the links on Ashish Sharma Blog.in are affiliate links for which I receive small compensation from sales of certain items.
        </p>
        <h2 className="text-black text-3xl font-bold m-8">What Are Affiliate Links?</h2>
        <p className="ml-8 text-lg mb-3">
          Purchases are made on external affiliate company websites: when a reader clicks on an affiliate link located on techblogservice.com to purchase an item, the reader buys the item from the seller directly (not from Ashish Sharma Blog).
        </p>
        <p className="ml-8 text-lg mb-3">
          Amazon and/or other companies pay Ashish Sharma Blog a small commission or other compensation for helping to bring customers to their website.
        </p>
        <p className="ml-8 text-lg mb-3">
          Prices are exactly the same for readers whether the purchase is through an affiliate link or a non-affiliate link. Clicking an affiliate link and clicking a non-affiliate link does not change the price or anything else for the visitor.
        </p>
        <p className="text-gray-600 ml-8 font-bold">Ashish Sharma Blog uses two main types of affiliate programs:</p>
        <h3 className="text-black ml-8 font-bold mt-5">1. Amazon affiliate links.</h3>
        <p className="ml-8 text-lg mb-3">
          techblogservice.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for website owners to earn fees by linking to Amazon.in and affiliated sites, as well as to other websites that may be affiliated with Amazon Service LLC Associates Program.
        </p>
        <h3 className="text-black ml-8 font-bold mt-5">2. Product affiliate links.</h3>
        <p className="ml-8 text-lg mb-3">
          If you click a product affiliate link and buy the product, then I will get a percentage of the sale or some other type of compensation.
        </p>
        <p className="ml-8 text-lg mb-3">
          Again, prices are not different if you use these affiliate links. You will not pay more by clicking through to the link. These links are not “pay per click.”
        </p>
        <span className="text-gray-600 ml-8 font-bold">What about sponsored content?</span>
        <p className="ml-8 text-lg mb-3">
          I do not write sponsored posts. I want to provide authentic, unbiased information. However, if a company would like to publish sponsored content on Ashish Sharma Blog, I will disclose this clearly at the beginning of the post. The bottom line is that I only recommend products I use myself or that I would recommend to family and friends.
        </p>
        <p className="text-gray-600 ml-8 font-bold">Your purchase helps support my research efforts. Thank you very, very much! I appreciate you!</p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
