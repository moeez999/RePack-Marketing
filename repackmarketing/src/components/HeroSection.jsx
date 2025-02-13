const Hero = () => {
  return (
    <section className="section-primary-repack">
      <div className="col-primary-repack">
        <article className="article-title-main-primary">
          <p className="title-p">MARKETING FÜR RESTAURANTS</p>
          <h1>
            Unvergessliches Marketing, <br />
            <span>das mehr Anfragen bringt</span>
          </h1>
          <h4>
            Spezialisten für Webdesign und Marketing im Gastro-Bereich <br />
            mit RE:PACK Marketing Kunden gewinnen und den Umsatz steigern.
          </h4>
        </article>
        <article className="article-btn-profile">
          <div>
            <button className="btn-primary">
              Jetzt durchstarten & Monatsabo buchen
            </button>
          </div>
          <div className="row-mini-img">
            <div>
              <img src="../mini-img.png" alt="" />
            </div>
            <div>
              <p>
                ⭐⭐⭐⭐⭐ <br /> Von Gastronomen empfohlen!
              </p>
            </div>
          </div>
        </article>
        <article className="article-primary-img">
          <figcaption>
            <img alt="" src="../hero-img.png" />
          </figcaption>
        </article>
      </div>
    </section>
  );
};

export default Hero;
