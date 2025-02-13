const Features = () => {
  return (
    <section className="section-contenu" id="machen">
      <div className="col-primary-contenu">
        {/* Main Title Section */}
        <article className="article-title-main">
          <p>WAS WIR MACHEN</p>
          <h1>
            Von Webdesign bis Marketing: <br /> Wir schaffen unvergessliche
            Erlebnisse <br />
            und steigern Ihren Erfolg
          </h1>
        </article>

        {/* Primary Content Section */}
        <article className="primary-article-contenu">
          {/* Figure 1 */}
          <figure className="figure-contenu">
            <div className="col-contenu">
              <div className="text-col-contenu">
                <h2>Webseiten</h2>
                <p>
                  Maßgeschneiderte Webseiten, die Gäste begeistern und Ihren
                  Erfolg steigern.
                </p>
              </div>
              <figcaption>
                <img alt="" src="../screen1.png" />
              </figcaption>
            </div>
          </figure>

          {/* Figure 2 */}
          <figure className="figure-contenu">
            <div className="col-contenu">
              <div className="text-col-contenu">
                <h2>Marketing</h2>
                <p>
                  Gezieltes Marketing, um die Sichtbarkeit Ihres Restaurants zu
                  erhöhen und den Umsatz zu maximieren.
                </p>
              </div>
              <figcaption>
                <img alt="" src="../screen2.png" />
              </figcaption>
            </div>
          </figure>

          {/* Figure 3 */}
          <figure className="figure-contenu">
            <div className="col-contenu">
              <div className="text-col-contenu">
                <h2>Printdesign</h2>
                <p>
                  Auffälliges Print-Design, das Eindruck hinterlässt und Gäste
                  beeindruckt.
                </p>
              </div>
              <figcaption>
                <img alt="" src="../screen3.png" />
              </figcaption>
            </div>
          </figure>
        </article>

        {/* Secondary Content Section 1 */}
        <article className="secondary-article-contenu" id="Monatsabos">
          <div className="article-title-contenu">
            <p>THE MARKETING PARTNER AT YOUR SIDE</p>
            <h1>
              Mit uns erhalten Sie den <br /> Service, den Sie suchen.
            </h1>
            <p className="desc-contenu-2">
              Wir bieten maßgeschneiderte Restaurantlösungen, von Webdesign über
              SEO <br /> und Social Media bis zu Menükarten. Flexibel buchbar
              als monatliches Abo – <br /> gemeinsam entwickeln wir Ihre
              optimale Strategie.
            </p>
            <button className="btn-primary">Monatsabos entdecken</button>
          </div>
          <div className="img-contenu-row">
            <img alt="" src="../Frame 55.png" />
          </div>
        </article>

        {/* Secondary Content Section 2 (Reversed Row) */}
        <article className="secondary-article-contenu reverse-row">
          <div className="article-title-contenu">
            <p>ADAPTED TO EVERY DEVICE</p>
            <h1>
              Mit einer eigenen App: <br /> Online-Bestellungen erfassen <br />{" "}
              und Kunden begeistern
            </h1>
            <p className="desc-contenu-2">
              Deine Webseite passt sich perfekt an jedes Gerät an – ob
              Smartphone, Tablet oder Desktop. Auf Wunsch erstellen wir zudem
              eine eigene App, mit der du bequem Online-Bestellungen aufnehmen
              und deinen Kunden einen noch besseren Service bieten kannst.
            </p>
          </div>
          <div className="img-contenu-row">
            <img alt="" src="../app-livegang 1.png" />
          </div>
        </article>

        {/* Secondary Content Section 3 */}
        <article className="secondary-article-contenu">
          <div className="article-title-contenu">
            <p>SEO OPTIMIERT UND DIGITAL VERNETZT</p>
            <h1>
              Mehr Sichtbarkeit für deine <br /> Webseite und Social Media
            </h1>
            <p className="desc-contenu-2">
              Mit gezielter Optimierung wird deine Webseite nicht nur an die
              Spitze der Suchergebnisse gebracht, sondern auch auf Social Media
              sichtbar. So erreichst du die Kunden, die du ansprechen möchtest,
              und präsentierst dein Angebot als attraktiven Blickfang – sowohl
              bei Google als auch in den sozialen Netzwerken. Deine Reichweite
              wird nachhaltig gesteigert.
            </p>
          </div>
          <div className="img-contenu-row">
            <img alt="" src="../Frame 54.png" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Features;
