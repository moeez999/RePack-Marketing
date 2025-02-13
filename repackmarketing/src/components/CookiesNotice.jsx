const CookieBanner = ({ setCookiesForm, setCookieBanner }) => {
  const handleClick = () => {
    setCookiesForm(true);
  };

  const handleClose = () => {
    setCookieBanner(false);
  };
  return (
    <section id="cookies-repack" className="cookies-repack-active">
      <div className="col-cookies-repack">
        <article className="article-cookies-row">
          <figure>
            <div className="col-cookies-text">
              <h1>🍪 Cookie Hinweis</h1>
              <p>
                Wir nutzen Cookies auf unserer{" "}
                <span className="text-white-cookies">
                  Website. Einige von ihnen sind essenziell, während andere{" "}
                </span>
                <br /> uns helfen, diese Website und{" "}
                <span className="text-white-cookies">
                  Ihre Erfahrung zu verbessern.
                </span>{" "}
                <span className="link-cookies" onClick={handleClick}>
                  Cookie Einstellungen
                </span>
              </p>
            </div>
          </figure>
          <figure>
            <button className="btn-primary" onClick={handleClose}>
              Alle akzeptieren
            </button>
            <button className="btn-secondary" onClick={handleClose}>
              Ablehnen
            </button>
          </figure>
        </article>
      </div>
    </section>
  );
};

export default CookieBanner;
