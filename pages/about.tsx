import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const About = () => {
  return (
    <div>
      <Header />
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>About Web Developer Ashish Sharma</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="container mx-auto p-8 bg-white rounded-md shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
              <img
                src="/ashish.jpg"
                alt="Ashish Sharma"
                className="rounded-md shadow-md w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8 order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-4">Welcome to My World of Web Development</h2>
              {/* 
                Adjusted margin and padding for better spacing in mobile view
                Made paragraph visible in mobile view
              */}
              <p className="text-gray-700 mb-4 md:py-16 py-4">
                Hi there! I'm Ashish Sharma, a passionate web developer with a keen eye for design and a love for creating beautiful, functional websites and applications.
              </p>
              <p className="text-gray-700 mb-4">
                Currently pursuing B.Tech in Computer Science from Abdul Kalam Technical University, I combine technical expertise with creative flair to deliver outstanding digital solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-100 p-6 rounded-md shadow-md text-center">
                  <h3 className="text-2xl font-bold">4+</h3>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div className="bg-blue-100 p-6 rounded-md shadow-md text-center">
                  <h3 className="text-2xl font-bold">10+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-blue-100 p-6 rounded-md shadow-md text-center">
                  <h3 className="text-2xl font-bold">95%</h3>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div className="bg-blue-100 p-6 rounded-md shadow-md text-center">
                  <h3 className="text-2xl font-bold">B.Tech Pursuer</h3>
                  <p className="text-gray-600">Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
