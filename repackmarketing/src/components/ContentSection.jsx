const Presentation = () => {
  return (
    <section className="section-presentation" id="Profitieren">
      <div className="col-primary-presentation">
        {/* Main Title Section */}
        <article className="article-title-main">
          <p>Kontinuierliche Unterstützung</p>
          <h1>
            Profitieren Sie von <br /> voller Budgetkontrolle mit klaren, <br />{" "}
            monatlichen Zahlungen.
          </h1>
        </article>

        {/* Primary Content Section */}
        <article className="article-presentation">
          {/* First Row */}
          <div className="row-presentation-primary">
            {/* Figure 1 */}
            <figure className="figure-presentation">
              <div className="col-presentation">
                <div className="text-col">
                  <h2>Einfach & risikofrei</h2>
                  <p>
                    Monatliche Abos für kontinuierliche <br /> Umsatzsteigerung
                    und bequeme Planung.
                  </p>
                </div>
                <figcaption>
                  <img alt="" src="../Group 86.png" />
                </figcaption>
              </div>
            </figure>

            {/* Figure 2 */}
            <figure className="figure-presentation fig-row-prst">
              <div className="row-presentation">
                <div className="text-col">
                  <h2>Höchster Komfort</h2>
                  <p>
                    Wir sind immer für Sie da und passen uns Ihren individuellen
                    Öffnungszeiten an, damit Sie sich rund um die Uhr auf Ihr
                    estaurant konzentrieren können.
                  </p>
                  <i>
                    <img
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                      src="../24-7 1.svg"
                    />
                  </i>
                </div>
                <figcaption>
                  <img
                    className="image-prst"
                    alt=""
                    src="../hoehster-komfort 1.png"
                  />
                </figcaption>
              </div>
            </figure>
          </div>

          {/* Second Row */}
          <div className="row-presentation-primary">
            {/* Figure 3 */}
            <figure className="figure-presentation">
              <div className="col-presentation">
                <div className="text-col">
                  <h2>Rund-um-sorglos</h2>
                  <p>
                    Mit RE:PACK Marketing erhalten Sie <br /> zielgerichtetes
                    Restaurantmarketing.
                  </p>
                </div>
                <figcaption>
                  <img alt="" src="../rundum-sorgloss 1.png" />
                </figcaption>
              </div>
            </figure>

            {/* Figure 4 */}
            <figure className="figure-presentation">
              <div className="col-presentation">
                <div className="text-col">
                  <h2>Laufende Betreung</h2>
                  <p>
                    Wir bleiben an Ihrer Seite <br /> für nachhaltigen Erfolg.
                  </p>
                </div>
                <figcaption>
                  <img
                    alt="../laufende-betreung.png"
                    src="../laufende-betreung.png"
                  />
                </figcaption>
              </div>
            </figure>

            {/* Figure 5 */}
            <figure className="figure-presentation">
              <div className="col-presentation">
                <div className="text-col">
                  <h2>Auf den Punkt</h2>
                  <p>
                    Unsere Dienstleistungen - präzise, effektiv <br /> und
                    maßgeschneidert für Ihr Restaurant.
                  </p>
                </div>
                <figcaption>
                  <img alt="" src="../auf-den-punkt 2.png" />
                </figcaption>
              </div>
            </figure>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Presentation;
