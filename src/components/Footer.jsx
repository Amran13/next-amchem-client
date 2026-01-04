"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#212E84] text-zinc-50">
      <footer className="footer sm:footer-horizontal p-10 py-24 max-w-[1280px] mx-auto">
        <aside>
          <Link href="/" className="mb-3 inline-block">
            <img src="/logo.png" alt="AMCHEM Logo" className="h-16 w-auto" />
          </Link>
          <p className="text-sm leading-relaxed">
            AMCHEM
            <br />
            Providing reliable solutions since 1992
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about" className="link link-hover">About Us</Link>
          <Link href="/products" className="link link-hover">Products</Link>
          <Link href="/distribute" className="link link-hover">Distribute With Us</Link>
          <Link href="/contact" className="link link-hover">Contact</Link>
        </nav>

        <nav>
          <h6 className="footer-title">Quality & Compliance</h6>
          <Link href="/quality-and-safety" className="link link-hover">Quality & Safety</Link>
          <Link href="/certificate" className="link link-hover">Certificates & Licenses</Link>
          <Link href="/legal-compliance" className="link link-hover">Legal Compliance</Link>
        </nav>

        <nav>
          <h6 className="footer-title">More</h6>
          <Link href="/cooperation" className="link link-hover">Co-operation</Link>
          <Link href="/privacy-policy" className="link link-hover">Privacy Policy</Link>
          <Link href="/terms" className="link link-hover">Terms of Use</Link>
        </nav>
      </footer>
      <div className="border-t border-white/15">
        <div className="max-w-[1280px] mx-auto px-6 py-4 text-center text-sm text-white/80">
          ©{new Date().getFullYear()}AMCHEM. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
