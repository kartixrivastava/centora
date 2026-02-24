'use client';

import { useState } from 'react';
import { ArrowDown, LeftWingCurve, RightWingCurve } from '@/components/icons';
import { ArrowDownRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: 'Products', hasDropdown: true },
  { label: 'Resources', hasDropdown: true },
  { label: 'Pricing', hasDropdown: false },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center items-start px-4 lg:px-0">
      {/* Central Content */}
      <div className="bg-white text-black px-4 flex items-center justify-between h-20 w-full max-w-5xl rounded-b-[32px] md:rounded-[32px] lg:rounded-t-none lg:rounded-b-[32px] mt-0 md:mt-4 lg:mt-0 text-[14.4px] font-medium leading-5 tracking-wide">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 pl-4">
          <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center border border-white/10">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
          <span className="font-semibold text-lg">Centora</span>
        </Link>

        {/* Nav Links (centered) */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href="#"
              className="inline-flex items-center rounded-full px-4 h-9 transition-colors hover:bg-gray-100 text-primary"
            >
              {item.label}
              {item.hasDropdown && (
                <ArrowDown className="ml-1 size-4 shrink-0" />
              )}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 pr-2">
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text- font-medium text-primary transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="group relative flex items-stretch h-11 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center bg-black text-white px-5 text-sm font-semibold rounded-xl tracking-widest">
                Try for free
              </span>
              <span className="flex items-center justify-center bg-[#a3e635] text-black pl-5 pr-3 -ml-3 rounded-r-xl">
                <ArrowDownRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-rotate-45"
                />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute  top-24 left-4 right-4 bg-white rounded-2xl p-4 shadow-xl flex flex-col gap-4 border border-black/5 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href="#"
                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 text-primary font-medium"
              >
                {item.label}
                {item.hasDropdown && <ArrowDown className="size-4 shrink-0" />}
              </Link>
            ))}
          </div>
          <div className="h-px w-full bg-black/5" />
          <div className="flex flex-col gap-3">
            <Link
              href="#"
              className="flex items-center justify-center px-4 py-3 font-medium text-primary hover:bg-gray-50 rounded-xl"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="group relative flex items-stretch justify-center h-12 w-full hover:scale-[1.02] transition-all duration-300"
            >
              <span className="relative z-10 flex flex-1 items-center justify-center bg-black text-white px-5 text-sm font-semibold rounded-l-xl tracking-widest">
                Try for free
              </span>
              <span className="flex items-center justify-center bg-[#a3e635] text-black px-5 rounded-r-xl">
                <ArrowDownRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
