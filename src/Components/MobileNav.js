import React from 'react'
import {Link} from 'gatsby';

function MobileNav({close}) {
    return (
      <>
        <section className="overlay--section">
          <nav id="mobile--nav">
            <ul className="mobile--nav">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    close(false)
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    close(false)
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  onClick={() => {
                    close(false)
                  }}
                >
                  gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  onClick={() => {
                    close(false)
                  }}
                >
                  pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={() => {
                    close(false)
                  }}
                >
                  Blog
                </Link>
              </li>
            </ul>
            <button
              className="close--button"
              onClick={() => {
                close(false)
              }}
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-name="Layer 2">
                  <g data-name="close">
                    <rect
                      width={24}
                      height={24}
                      transform="rotate(180 12 12)"
                      opacity={0}
                    />
                    <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
                  </g>
                </g>
              </svg>
            </button>
          </nav>
        </section>
      </>
    )
}

export { MobileNav}
