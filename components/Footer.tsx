import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { FaTwitter, FaSquarespace } from 'react-icons/fa'; // Changed from FaSquareBehance
import { IconType } from 'react-icons';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { TbBrandFiverr } from 'react-icons/tb';
import logoDark from "../public/images/logoLight.png";

// Custom type for BehanceIcon
const BehanceIcon: IconType = FaSquarespace; // Changed from FaBehanceSquare

// Assume 'logoLight' is imported or declared elsewhere in your code

const Footer = () => {
  return (
    <div className="w-full py-10 bg-black text-white/80 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center flex-wrap gap-3">
          {/* Logo Image */}
          {/* Assume 'logoLight' is declared as an imported variable */}
          <Link href="/">
            <Image
              src={logoDark}
              width={80}
              height={80}
              alt="Logo"
            />
          </Link>
          {/* Copyright text */}
          <p className="flex items-center text-xs md:text-sm font-titleFont gap-1">
            <AiOutlineCopyrightCircle className="mt-[1px]" />
            <a target="_blank" href="https://www.linkedin.com/in/ashish-sharma-118400185/">Mr.AshishSharma</a> & <a target="_blank" href="https://www.linkedin.com/in/divyanshu-saini-8ab623231/">Mr.Divyanshu Saini</a> || all rights reserved 2023
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a target="_blank" href="https://www.behance.net/AshishSharma825">
            <BehanceIcon className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          </a>
          <a target="_blank" href="https://www.fiverr.com/ashishsharma2/">
            <TbBrandFiverr className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          </a>
          <a target="_blank" href="https://github.com/Ashishsharmastudio/">
            <BsGithub className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/ashish-sharma-118400185/">
            <BsLinkedin className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          </a>
          <a target="_blank" href="https://twitter.com/AshishSharma825/">
            <FaTwitter className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
