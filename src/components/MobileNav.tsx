"use client"

import { navLinks } from "@/constant/nav-links"
import {Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <>
      <div className="flex md:hidden cursor-pointer md:cursor-none" onClick={toggleMenu}>
        
        {!isOpen?(<Menu/>):(<X/>)}
      </div>
      {isOpen && <figure className="md:hidden absolute rounded-md right-2 origin-top top-20 w-auto bg-slate-800 p-2 transition-all z-50">
        <nav className="w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wide">
            {navLinks.map((link,index) =>{
                return(
                    <Link key={index}
                     href={`#${link}`}
            className="py-1 px-2 transition-all rounded-md hover:bg-slate-700 hover:text-sky-400"
            onClick={toggleMenu}>
                {link}
            </Link>
                )
            })}
        </nav>
      </figure>}
    </>
  )
}

export default MobileNav
