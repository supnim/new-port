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
            href={`/`}
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
            <ul className="nav">
              <li className="nav-home">
                <Link to={`/`}>home</Link>
              </li>
              <li className="nav-work">
                <Link to={`/work`}>work</Link>
              </li>
              <li className="nav-photo">
                <Link to={`/photo`}>photo</Link>
              </li>
              <li className="nav-video">
                <Link to={`/video`}>video</Link>
              </li>
              <li className="nav-contact">
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
        <div className="footer-logo">
          <Link className="site-head-logo" to={`/`}>
            {title}
          </Link>
        </div>
        <div className="footer-links">
          <a href="/">bookwise</a>
          <a href="/">knowhere</a>
          <a href="/">design system</a>
          <a href="/">pagebuilder</a>
          <a href="/">primefitness</a>
        </div>
        <div className="footer">
          &copy; {new Date().getFullYear()} &mdash; handmade with {" ♥︎ "}
        </div>
      </footer>
    </div>
  )
}

export default Layout
