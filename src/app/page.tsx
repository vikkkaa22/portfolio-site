import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import BackgroundGrid from "@/components/BackgroundGrid";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";

export default function Home() {
 return (
  <>

  <Loader />

  <Cursor />

  <BackgroundGrid />

   <Navbar />

   <Hero />
   <About />
   <Portfolio />
   <Services />
   <Process />
   <Reviews />
   <Contact />
  </>
 )
}