import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import manImg from "../public/man.png"
import logoDark from "../public/images/logoDark.png";

const Header = () => {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">

      <div id="navdiv" className="flex items-center  px-4 py-3 max-w-7xl mx-auto">

        <Link href="/">
          <Image
            src={logoDark}
            width={80}
            height={80}
            alt="Logo"
          />
        </Link>

        <div className="flex items-center ml-auto space-x-4">

          {/* Desktop menu */}
          <nav className="hidden md:block  space-x-8">
            <Link href="/">Home</Link>
            <Link href={`/post`}>Posts</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>



        </div>
                                 {/* user login */}
                                 <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 rounded-full"
              src={
                session?.user?.image 
                  ? session.user.image
                  : "https://www.noormohammad.live/static/media/roundedProfile.477a194221d255c8ce26.png"
              }
              alt="logo"
            />
            <p className="text-sm font-semibold text-slate-600	">
            {session?.user?.name || 'Hello Stranger'} 
              </p>
          </div>
          {
            session ? ( <button onClick={()=> signOut()} 
            className="uppercase text-xs text-slate-600 border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign Out
            </button>
            ):(
            <button onClick={()=> signIn()} 
            className="uppercase text-xs text-slate-600 border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign In
          </button>
            )
          }       
        </div> 
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


      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 list-item	">
          <a href="/" className="block  px-3 py-2 rounded-md text-base uppercase font-semibold text-cyan-700
              hover:bg-secondaryColor hover:text-white">Home</a>
          <a href="/post" className="block  px-3 py-2 rounded-md text-base uppercase font-semibold text-cyan-700
              hover:bg-secondaryColor hover:text-white">Blog</a>
          <a href="/about" className="block  px-3 py-2 rounded-md text-base uppercase font-semibold text-cyan-700
              hover:bg-secondaryColor hover:text-white">About</a>
          <a href="/contact" className="block  px-3 py-2 rounded-md text-base uppercase font-semibold text-cyan-700
              hover:bg-secondaryColor hover:text-white">Contact</a>
        </div>
      </div>

    </header>
  )
}

export default Header