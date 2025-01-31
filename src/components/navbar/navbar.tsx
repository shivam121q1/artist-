"use client";
import { UserCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
interface NavbarProps{
  title?:string,
  logoUrl:string
}
export default function Navbar({title,logoUrl}:NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 border-b-2 border-blue-500 mx-10">
      <div className="flex justify-between items-center">
        {/* Brand */}
        <div className="flex gap-2 items-center justify-center">
          {logoUrl && <Image
            height={40}
            width={80}
            src={logoUrl}
            alt="logo"
          />}
        </div>

        {/* Links for Larger Screens */}
        <div className="hidden lg:flex space-x-8">
          <Link href="#" className="text-black font-medium hover:underline">
            Home
          </Link>
          <Link href="#" className="text-black font-medium hover:underline">
            Savings Calculator
          </Link>
          <Link href="#" className="text-black font-medium hover:underline">
            International Services
          </Link>
          <Link href="#" className="text-black font-medium hover:underline">
            Support
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden block text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Sign In Section */}
        {/* <div className="hidden lg:flex items-center space-x-2">
          <UserCircle2 className="w-8 h-8 text-black bg-gray-100 rounded-full p-1" />
          <Link href="#" className="text-black font-medium hover:underline">
            Sign In
          </Link>
        </div> */}
      </div>

      {/* Links Below Navbar for Mobile */}
      {menuOpen && (
        <div className="mt-4 bg-gray-50 rounded-lg lg:hidden">
          <div className="flex flex-col space-y-2">
            <Link
              href="#"
              className="text-black font-medium hover:underline py-2"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-black font-medium hover:underline py-2"
            >
              Savings Calculator
            </Link>
            <Link
              href="#"
              className="text-black font-medium hover:underline py-2"
            >
              International Services
            </Link>
            <Link
              href="#"
              className="text-black font-medium hover:underline py-2"
            >
              Support
            </Link>
          </div>
          {/* Sign In Section for Small Screens */}
          <div className="flex justify-end mt-2">
            <div className="flex items-center space-x-2">
              <UserCircle2 className="w-8 h-8 text-black bg-gray-100 rounded-full p-1" />
              <Link href="#" className="text-black font-medium hover:underline">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
