import React from "react"
import { Link } from "gatsby"
import {Logo} from './Logo';
import {MobileNav} from '../Components/MobileNav';
import { useState } from "react";
function Nav() {
  
  const [Open, setOpen] = useState(false)
  return (
    <>
      <nav>
        <section className="logo--section">
          <Link to="/">
            <Logo />
          </Link>
        </section>

        <ul className="desktop--nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
           <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <button id="nav--button" onClick={()=>{
          setOpen(true)
        }}>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#6FCF8F"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
      {Open && <MobileNav close={setOpen} />}
    </>
  )
}

export { Nav }
