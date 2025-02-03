import Image from "next/image";
import Link from "next/link";
import HeroSection, { Hero, Hero1 } from "./components/Hero/page";
import Griddefault from "./components/Griddefault/page";
import AboutPage from "./components/AboutUs/page";
import ContactUs from "./components/Contact/page";
import BlogPage from "./components/BlogPage/page";
import Faq from "./components/Faq/page";
import AccountPage from "./components/AccountPage/page";
import Shoplist from "./components/Shoplist/page"
import Cart from "./components/Cart/page"

export default function Homepage() {
  return (
    <div>
      <header />
      <HeroSection />
      <Hero />
      <Hero1 />
      <footer />
      <Griddefault />
      <AboutPage />
      <ContactUs />
      <BlogPage />
      <Faq />
      <AccountPage />
      <Shoplist />
      <Cart />
    </div>
    
    
  );
}
