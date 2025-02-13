export default function ContactForm({ setShow }) {
  const handleClose = () => {
    setShow(false);
  };
  return (
    <figure className="popContactCliK">
      <div className="col-contact-repack-pop">
        <section>
          <div className="col-contact">
            <h1 className="title-pop-ct">EINFACH &amp; KOSTENLOS ANFRAGEN</h1>
            <div className="close-contact-mobile" onClick={handleClose}>
              <i>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41626 0.77597L26.3532 26.6111M27.2083 0.77597L1.27132 26.6111"
                    stroke="white"
                    strokeOpacity="0.8"
                    strokeWidth="3.43487"
                  />
                </svg>
              </i>
            </div>
            <div className="row-contact">
              <img alt="" src="../../Group33.svg" />
              <label>
                <h2>RE:PACK MARKETING </h2>
                <p>Ihr Ansprechpartner</p>
              </label>
            </div>
            <div className="row-contact">
              <img alt="" src="../../Group92.svg" />
              <label>
                <h2>info@repack-marketing.com</h2>
                <p>Unser Postfach</p>
              </label>
            </div>
            <div className="row-contact">
              <img alt="" src="Group91.svg" />
              <label>
                <h2>02064 62560 50 </h2>
                <p>Agentur Hotline</p>
              </label>
            </div>
            <div className="picture-contact-pop">
              <img alt="" src="./../impresssum.png" />
            </div>
          </div>
        </section>
        <section>
          <div className="col-contact">
            <div className="close-contact">
              <i>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41626 0.77597L26.3532 26.6111M27.2083 0.77597L1.27132 26.6111"
                    stroke="white"
                    strokeOpacity="0.8"
                    strokeWidth="3.43487"
                  />
                </svg>
              </i>
            </div>
            <form>
              <div className="row-form">
                <label>
                  <p>Vorname</p>
                  <input type="text" />
                </label>
                <label>
                  <p>Nachname</p>
                  <input type="text" />
                </label>
              </div>
              <div className="row-form">
                <label>
                  <p>Restaurantname</p>
                  <input type="text" />
                </label>
              </div>
              <div className="row-form">
                <label>
                  <p>E-Mail Adresse</p>
                  <input type="text" />
                </label>
              </div>
              <div className="row-form">
                <label>
                  <p>Nachricht</p>
                  <textarea
                    rows={10}
                    placeholder="Ihre Nachricht..."
                    defaultValue={""}
                  />
                </label>
              </div>
              <div className="row-form">
                <button className="btn-tertiary">Monatsabos entdecken</button>
                <button className="btn-primary">Absenden</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </figure>
  );
}
