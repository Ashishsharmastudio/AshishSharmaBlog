import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logoDark from "../public/images/logoDark.png"; 

const Header = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">

        <Link href="/">
          <Image 
            src={logoDark}
            width={80}
            height={80}
            alt="Logo"
          />
        </Link>

        <div className="flex items-center space-x-4">
          
          {/* Desktop menu */}
          <nav className="hidden md:block space-x-8">
            <Link href="/">Home</Link>
            <Link href={`/post`}>Posts</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="block md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

        </div>

      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>  
          <Link href="/contact">Contact</Link>
        </div>
      </div>

    </header>
  )
}

export default Header