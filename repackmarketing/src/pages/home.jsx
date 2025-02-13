import Instagram from "../components/BeforeFooter";
import Presentation from "../components/ContentSection";
import CookieBanner from "../components/CookiesNotice";
import Hero from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Pricing from "../components/PremiumPricing";
import Features from "../components/Features";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { useState } from "react";
import CookieForm from "../components/CookieForm";

export default function Home() {
  const [show, setShow] = useState(false);
  const [cookiesForm, setCookiesForm] = useState(false);
  const [cookiesBanner, setCookieBanner] = useState(true);
  return (
    <div>
      <Navbar setShow={setShow} />
      <Hero />
      <Features />
      <Presentation />
      <Pricing />
      <Instagram />
      {cookiesBanner && <CookieBanner setCookieBanner={setCookieBanner} />}
      {show && <ContactForm setShow={setShow} />}
      {cookiesForm && <CookieForm setCookiesForm={setCookiesForm} />}
      <Footer />
    </div>
  );
}
