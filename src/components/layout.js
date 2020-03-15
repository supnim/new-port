import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`//#region `}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
            </nav>
          <div className="site-head-right">
          <ul className="nav" role="menu">
              <li className="nav-home" role="menuitem">
                <Link to={`/`}>home</Link>
              </li>
              <li className="nav-work" role="menuitem">
                <Link to={`/work`}>work</Link>
              </li>
              <li className="nav-photo" role="menuitem">
                <Link to={`/photo`}>photo</Link>
              </li>
              <li className="nav-video" role="menuitem">
                <Link to={`/video`}>video</Link>
              </li>
              <li className="nav-contact" role="menuitem">
                <Link to={`/contact`}>contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        handmade with {" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ♥︎
        </a>
      </footer>
    </div>
  )
}

export default Layout
