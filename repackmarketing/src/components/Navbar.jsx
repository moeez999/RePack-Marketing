import { useState } from "react";

function Navbar({ setShow }) {
  const [showMobile, setShowMobile] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <nav id="topNav">
        <section>
          <div className="nav-row-global">
            <article className="row-nav logo-text">
              <a href="/" data-discover="true">
                <img alt="" src="../logo.svg" />
              </a>
              <p className="line-vert">|</p>
              <p className="logo-desc">
                Design &amp; Marketing <br />
                im flexiblem Monatsabo
              </p>
            </article>
            <article>
              <ul className="row-ul">
                <a href="#machen" data-discover="true">
                  <li>
                    <p>Leistungen</p>
                  </li>
                </a>
                <a href="#Profitieren">
                  <li>
                    <p>Über uns</p>
                  </li>
                </a>
                <a href="#Monatsabos">
                  <li>
                    <p>Preise</p>
                  </li>
                </a>
                <li>
                  <button className="row-btn btn-primary">
                    <p>Projekt starten</p>
                    <p>1 Minute</p>
                  </button>
                </li>
                <li onClick={handleShow}>
                  <p>Kontakt zu uns</p>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </nav>
      <nav id="topNavMobile">
        <section>
          <div className="nav-row-global">
            <article className="row-nav logo-text">
              <img alt="" src="../logo.svg" />
              <p className="line-vert">|</p>
              <p className="logo-desc">
                Design &amp; Marketing <br />
                im flexiblem Monatsabo
              </p>
            </article>
            <article className="row-ul">
              <i onClick={() => setShowMobile(!showMobile)}>
                <svg
                  width={27}
                  height={20}
                  viewBox="0 0 27 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1H27"
                    stroke="white"
                    strokeOpacity="0.8"
                    strokeWidth={2}
                  />
                  <path
                    d="M0 10H27"
                    stroke="white"
                    strokeOpacity="0.8"
                    strokeWidth={2}
                  />
                  <path
                    d="M0 19H27"
                    stroke="white"
                    strokeOpacity="0.8"
                    strokeWidth={2}
                  />
                </svg>
              </i>
            </article>
            {showMobile && (
              <article className="contenu-mobile">
                <ul className="row-ul">
                  <a href="#machen">
                    <li>
                      <p>Leistungen</p>
                    </li>
                  </a>
                  <a href="#Profitieren">
                    <li>
                      <p>Über uns</p>
                    </li>
                  </a>
                  <a href="#Monatsabos">
                    <li>
                      <p>Preise</p>
                    </li>
                  </a>
                  <li>
                    <button className="row-btn btn-primary">
                      <p>Projekt starten</p>
                      <p>1 Minute</p>
                    </button>
                  </li>
                  <li onClick={handleShow}>
                    <p>Kontakt zu uns</p>
                  </li>
                </ul>
              </article>
            )}
          </div>
        </section>
      </nav>
    </div>
  );
}

export default Navbar;
