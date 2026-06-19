import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
 return (
  <>
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