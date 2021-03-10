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
          </nav>
        </section>
      </>
    )
}

export { MobileNav}
