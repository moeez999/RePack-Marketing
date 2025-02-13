import React, { useState } from "react";

export default function CookieForm({ setCookiesForm }) {
  const handleClose = () => {
    setCookiesForm(false);
  };
  const [preferences, setPreferences] = useState({
    necessary: true,
    preferences: false,
    marketing: false,
  });

  const handleToggle = (e) => {
    const { name, checked } = e.target;
    setPreferences({
      ...preferences,
      [name]: checked,
    });
  };

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      preferences: true,
      marketing: true,
    });
    console.log("All cookies accepted:", preferences);
  };

  const handleRejectAll = () => {
    setPreferences({
      necessary: true,
      preferences: false,
      marketing: false,
    });
    console.log("All cookies rejected:", preferences);
  };

  const handleSaveSettings = () => {
    console.log("Cookie settings saved:", preferences);
    setCookiesForm(false);
  };

  return (
    <figure className="popCookiesCliK">
      <div className="col-cookies-repack-pop">
        <header>
          <img alt="" src="../logo.svg" />
          <i onClick={handleClose}>
            <svg
              width={20}
              height={20}
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.416504 0.788696L25.506 25.7798M26.3332 0.788696L1.24363 25.7798"
                stroke="white"
                strokeOpacity="0.8"
                strokeWidth="3.70238"
              />
            </svg>
          </i>
        </header>
        <div className="main-cookies">
          <h1>Cookie-Richtlinien 📢</h1>
          <p>
            Laut Gesetz können wir Cookies auf Ihrem Gerät speichern, wenn diese
            für den Betrieb dieser Seite unbedingt notwendig sind. Für alle
            anderen Cookie-Typen benötigen wir Ihre Erlaubnis. Diese Seite
            verwendet unterschiedliche Cookie-Typen. Einige Cookies werden von
            Drittparteien platziert, die auf unseren Seiten erscheinen. Sie
            können Ihre Einwilligung jederzeit von der Cookie-Erklärung auf
            unserer Website ändern oder widerrufen. Erfahren Sie in unserer
            Datenschutzrichtlinie mehr darüber, wie wir personenbezogene Daten
            verarbeiten.
          </p>
        </div>
        <div className="footer-cookies">
          <article>
            <div className="row-cookies-foot">
              <div className="row-i-cookie">
                <i>
                  <svg
                    width={21}
                    height={13}
                    viewBox="0 0 21 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.04736 1.08633L10.3033 10.3423L19.5593 1.08633"
                      stroke="white"
                      strokeWidth="2.77679"
                    />
                  </svg>
                </i>
                <p>Notwendige</p>
              </div>
              <label className="switch">
                <input
                  disabled
                  type="checkbox"
                  checked={preferences.necessary}
                />
                <span
                  className="slider"
                  style={{
                    cursor: "not-allowed",
                    background: "rgb(86, 86, 86)",
                    opacity: "0.5",
                  }}
                >
                  <i className="slider-i-check">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 22 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.22021 8.7039L7.23658 14.7203L20.1949 1.76193"
                        stroke="#292929"
                        strokeWidth="2.77679"
                      />
                    </svg>
                  </i>
                  <i className="slider-i-x">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.72314 1.99106L17.5203 17.7262M18.041 1.99106L2.24393 17.7262"
                        stroke="#292929"
                        strokeWidth="3.70238"
                      />
                    </svg>
                  </i>
                </span>
              </label>
            </div>
          </article>
          <article>
            <div className="row-cookies-foot">
              <div className="row-i-cookie">
                <i>
                  <svg
                    width={21}
                    height={13}
                    viewBox="0 0 21 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.04736 1.08633L10.3033 10.3423L19.5593 1.08633"
                      stroke="white"
                      strokeWidth="2.77679"
                    />
                  </svg>
                </i>
                <p>Präferenzen</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  name="preferences"
                  checked={preferences.preferences}
                  onChange={handleToggle}
                />
                <span className="slider">
                  <i className="slider-i-check">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 22 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.22021 8.7039L7.23658 14.7203L20.1949 1.76193"
                        stroke="#292929"
                        strokeWidth="2.77679"
                      />
                    </svg>
                  </i>
                  <i className="slider-i-x">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.72314 1.99106L17.5203 17.7262M18.041 1.99106L2.24393 17.7262"
                        stroke="#292929"
                        strokeWidth="3.70238"
                      />
                    </svg>
                  </i>
                </span>
              </label>
            </div>
          </article>
          <article>
            <div className="row-cookies-foot">
              <div className="row-i-cookie">
                <i>
                  <svg
                    width={21}
                    height={13}
                    viewBox="0 0 21 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.04736 1.08633L10.3033 10.3423L19.5593 1.08633"
                      stroke="white"
                      strokeWidth="2.77679"
                    />
                  </svg>
                </i>
                <p>Marketing</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  name="marketing"
                  checked={preferences.marketing}
                  onChange={handleToggle}
                />
                <span className="slider">
                  <i className="slider-i-check">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 22 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.22021 8.7039L7.23658 14.7203L20.1949 1.76193"
                        stroke="#292929"
                        strokeWidth="2.77679"
                      />
                    </svg>
                  </i>
                  <i className="slider-i-x">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.72314 1.99106L17.5203 17.7262M18.041 1.99106L2.24393 17.7262"
                        stroke="#292929"
                        strokeWidth="3.70238"
                      />
                    </svg>
                  </i>
                </span>
              </label>
            </div>
          </article>
        </div>
        <div className="button-cookies">
          <div className="btn-cookies-row">
            <button className="btn-primary" onClick={handleAcceptAll}>
              Alle akzeptieren
            </button>
            <button className="btn-secondary" onClick={handleRejectAll}>
              Ablehnen
            </button>
          </div>
          <div className="btn-cookies-row">
            <button className="btn-secondary" onClick={handleSaveSettings}>
              Einstellungen speichern
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
}
