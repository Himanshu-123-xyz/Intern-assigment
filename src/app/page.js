import Image from "next/image";
import Hero_Sec from "./home-component/Hero_Sec";
import About from "./home-component/About";
import Services from "./home-component/Services";
import Quote from "./home-component/quote";
import Expertise from "./home-component/expertise";
import How_we_work from "./home-component/How_we_work";
import Honoring from "./home-component/Honoring";
import Specialties from "./home-component/Specialties";
import Our_office from "./home-component/our_office";

export default function Home() {
  return (
    <>
     <Hero_Sec />
     <About />
     <Services />
     <Quote />
     <Expertise />
     <How_we_work />
     <Honoring />
     <Specialties />
     <Our_office />
    </>
  );
}
