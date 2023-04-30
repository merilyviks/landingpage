import About from "@/components/About";
import Episodes from "@/components/Episodes";
import Hero from "@/components/Hero";
import Faq from "@/components/faq/Faq";
import ContactForm from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";
import Shop from "@/components/Shop";
import Support from "@/components/Support";

export default function Home() {
  return (
    <main>
      <div className="hero" id="kodu">
        <Hero />
      </div>
      <Episodes />
      {/*     <div className="contianer">
        <div id="test">about</div>
        <div id="raagi">räägi kaasa</div>
        <div className="episodes-overview"></div>
      </div> */}
      {/*       <div></div> */}
      <Support />
      <Shop />
      <Faq />
      <About />
      <ContactForm />
    </main>
  );
}
