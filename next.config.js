// next.config.js
const path = require('path')

/** @type {import('next').NextConfig} */  
module.exports = {

  reactStrictMode: true,

  images: {
    domains: ['cdn.sanity.io'], 
    domains: ['plus.unsplash.com'],
  },


};