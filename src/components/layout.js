import React from "react";
import { Link } from "gatsby";
import Logo from "../../content/assets/supnimLogo.svg";
import Pdf from "../../content/assets/nimeshCV.pdf";
import scrollTo from "gatsby-plugin-smoothscroll";

const Layout = props => {
  const { children } = props;
  const [toggleNav, setToggleNav] = React.useState(false);

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="nav"
              role="navigation"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav className="site-head-left">
            <Link className="site-head-logo" aria-label="supnim logo" to={`/`}>
              <Logo />
            </Link>
          </nav>
          <div className="site-head-right" role="menu">
            <ul className="nav" role="menubar" aria-label="menu">
              <li role="menuitem" className="nav-home">
                <Link to={`/`}>home</Link>
              </li>
              <li role="menuitem" className="nav-work">
                <Link to={`/`} onClick={() => scrollTo("#jobs")}>
                  work
                </Link>
              </li>
              <li role="menuitem" className="nav-photo">
                <Link to={`/photo`}>photo</Link>
              </li>
              <li role="menuitem" className="nav-video">
                <Link to={`/video`}>video</Link>
              </li>
              <li role="menuitem" className="nav-audio">
                <Link to={`/audio`}>audio</Link>
              </li>
              <li role="menuitem" className="nav-contact">
                <Link to={`/contact`}>contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div className="transition-fade">{children}</div>
      </main>
      <footer className="site-foot">
        <div className="footer-text">
          <div className="footer-links">
            <a href="/bookwise">bookwise</a>
            <p>•</p>
            <a href="/knowhere">knowhere</a>
            <p>•</p>
            <a href="/design-system">design system</a>
            <p>•</p>
            <a href="/pagebuilder">pagebuilder</a>
            <p>•</p>
            <a href="/primefitness">primefitness</a>
          </div>
          <div title="using ReactJS">
            <a></a>
            &copy; {new Date().getFullYear()} &mdash;{" "}
            <a style={{ color: "white" }} href="https://github.com/supnim">
              handmade{" "}
            </a>{" "}
            with {" ♥︎ "}
          </div>
        </div>
        <div className="footer-buttons">
          <ul className="actions fit">
            <li>
              <a
                href={Pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="cv button large primary"
              >
                CV
              </a>
            </li>
            <li>
              <a href="mailto:hello@supnim.com" className="button large footer">
                get in touch
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
