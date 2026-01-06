"use client";
import Link from "next/link";

const Navbar = () => {
  const mainLinks = (
    <>
      <li><Link href="/">HOME</Link></li>
      <li><Link href="/about">ABOUT US</Link></li>
      <li><Link href="/products">PRODUCTS</Link></li>
      <li><Link href="/quality-and-safety">QUALITY & SAFETY</Link></li>
      <li><Link href="/distribute">DISTRIBUTE WITH US</Link></li>
      <li><Link href="/contact">CONTACT</Link></li>
    </>
  );

  const moreLinks = (
    <>
      <li><Link href="/certificate">CERTIFICATES AND LICENSES</Link></li>
      <li><Link href="/cooperation">CO-OPERATION</Link></li>
      <li><Link href="/legal-compliance">LEGAL COMPLIANCE</Link></li>
    </>
  );

  return (
    <div className="bg-[#212E84] text-[#f4f4f4] sticky top-0 z-50">
      <nav className="navbar max-w-[1280px] mx-auto px-4">

        {/* LEFT */}
        <div className="navbar-start bg-[#212E84] gap-3">

          {/* MOBILE MENU */}
          <div className="dropdown bg-[#212E84]">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 text-base-content rounded-box w-64"
            >
              {mainLinks}
              {/* <li className="menu-title mt-2">More</li> */}
              {moreLinks}
            </ul>
          </div>

          {/* LOGO */}
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 font-semibold text-sm">

            {mainLinks}

            <li className="dropdown">
              <label tabIndex={0} className="cursor-pointer select-none">
                MORE
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 text-base-content rounded-box w-64 mt-1"
              >
                {moreLinks}
              </ul>
            </li>

          </ul>
        </div>

        <div className="navbar-end" />
      </nav>
    </div>
  );
};

export default Navbar;
