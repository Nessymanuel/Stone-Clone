import { AboutUs } from "../components/AboutUs";
import { HeroSection } from "../components/HeroSection";
import { Menu } from "../components/Menu";
import { Features } from "../components/Features";
import { SocialProve } from "../components/SocialProve";
import { CTA } from "../components/CTA";
import { CTA2 } from "../components/CTA2";
import { Partnes } from "../components/Partnes";
import { Payment } from "../components/Payment";
import { Depoimento } from "../components/Depoimento";
import { CTA3 } from "../components/CTA3";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";

export function HomePage(){
    return (
        <>
       <Menu/>
       <HeroSection/>
       <AboutUs/>
       <Features/>
       <SocialProve/>
       <CTA/>
       <CTA2/>
       <Partnes/>
       <Payment/>
       <Depoimento/>
       <CTA3/>
       <Section/>
       <Footer/>
        </>
    )
}