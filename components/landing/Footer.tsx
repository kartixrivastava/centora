"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

/* ================= TYPES ================= */

type FooterLink = {
  label: string;
  href: string;
};

type FooterLinkGroup = {
  title: string;
  minWidth?: string;
  links: FooterLink[];
};

/* ================= DATA ================= */

const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "MENU",
    minWidth: "min-w-[70.06px]",
    links: [
      { label: "Customers", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Help", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "SOCIAL",
    minWidth: "min-w-[68.17px]",
    links: [
      { label: "X (Twitter)", href: "#" },
      { label: "Email", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

/* ================= STYLES ================= */

const footerWrapper =
  "flex w-full flex-col items-center bg-[#F5F5F5] pt-[152px]";

const headingClass =
  "flex flex-col items-start self-stretch text-[rgba(23,23,23,0.50)] font-['SF_Pro'] text-[12px] font-[510] leading-[16px] tracking-[0.6px] uppercase";

const linkClass =
  "flex flex-col items-start self-stretch pt-[2.75px] pb-[1.25px] text-[#171717] font-['SF_Pro'] text-[13.7px] font-[400] leading-[20px]";

/* ================= COMPONENT ================= */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footerWrapper}>
      {/* Green Section */}
      <div className="flex flex-col items-start self-stretch rounded-t-[48px] bg-[#A8D946] px-53.25 pb-16 pt-96">
        <div className="flex max-w-5xl flex-col items-start gap-22 self-stretch px-6">
          <div className="flex items-start gap-[532.8px] self-stretch">
            {/* Logo */}
            <Link
              href="#"
              className="flex items-center gap-2"
              aria-label="Centora Home"
            >
              <div className="flex h-8 w-8 rounded-full bg-[#171717] items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>
              <span className="font-['SF_Pro'] text-[20px] font-[590] leading-0 text-[#171717]">
                Centora
              </span>
            </Link>

            {/* Navigation */}
            <nav
              className="flex items-start gap-16"
              aria-label="Footer Navigation"
            >
              {FOOTER_LINK_GROUPS.map((group) => (
                <div
                  key={group.title}
                  className={`flex flex-col items-start gap-4 self-stretch ${
                    group.minWidth ?? ""
                  }`}
                >
                  <h2 className={headingClass}>{group.title}</h2>

                  <ul className="flex flex-col items-start gap-2 self-stretch">
                    {group.links.map((link) => (
                      <li key={link.label} className="self-stretch">
                        <Link href={link.href} className={linkClass}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {/* Copyright */}
          <p className="self-stretch text-center font-['SF_Pro'] text-[13.6px] font-normal leading-5 text-[rgba(23,23,23,0.50)]">
            © 2026 Centora. All rights reserved.
          </p>
        </div>
      </div>

      {/* CTA Floating Section */}
      <div className="absolute bottom-96 left-1/2 w-full max-w-5xl -translate-x-1/2 px-6 md:px-8">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[32px] border border-white/20 px-4 py-20 text-center shadow-2xl md:py-28">
          {/* Blurred Background */}
          <Image
            src="/Assets/Blurred.jpg"
            alt="Blurred background"
            fill
            priority
            className="object-cover blur-sm"
          />

          {/* Content */}
          <h1 className="relative z-10 mb-10 text-4xl font-semibold leading-[1.1] tracking-wider text-primary md:text-5xl lg:text-[56px]">
            Start building something
            <br />
            truly amazing today
          </h1>

          <div className="relative z-10 flex w-full max-w-md items-center rounded-full border border-white/50 bg-white/90 p-1.5 shadow-lg backdrop-blur-sm">
            <div className="pl-4 pr-2 text-gray-500">
              <Mail className="h-5 w-5" />
            </div>

            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter your email"
              className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500 md:text-base"
            />

            <button className="flex shrink-0 items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:cursor-pointer md:px-6 md:py-3">
              Join Waitlist
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
