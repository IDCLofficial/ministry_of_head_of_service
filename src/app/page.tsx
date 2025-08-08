import { Hero } from "@/app/components/Hero";
import AboutSection from "@/app/components/AboutSection";
import AboutCommisioner from "@/app/components/AboutCommisioner";
import QuickLinks from "@/app/components/QuickLinks";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import FeaturedInitiatives from "./components/FeaturedInitiatives";
// import Stats from "@/app/components/Stats";
//import FeaturedPartners from "./components/FeaturedPartners";

export default function Home() {
  return (
    <div className="h-screen w-full bg-red-400">
      <Hero
        title="Imo State Ministry of Head of Service" 
        caption="Driving Excellence and Professionalism in the Civil Service" 
        subtitle="Welcome to the official website of the Imo State Ministry of Head of Service. We are charged with shaping policies, programs, and reforms that promote a professional, disciplined, and effective civil service in Imo State. Our commitment is to build a public service culture that upholds merit, ethics, and excellence in governance."
      />
      <AboutSection 
        title="About Us"
        subtitle= "The Imo State Ministry of Head of Service is the administrative hub of the civil service. It coordinates, supervises, and reforms civil service operations to ensure that government functions are executed by well-trained, professional, and ethically grounded personnel. The ministry drives public sector excellence by fostering a culture of discipline, merit, and accountability."
        image1="/images/uzodimma.jpeg"
        image2="/images/hos2.jpg"
      />
      <AboutCommisioner 
        imgSrc="/images/commissioner.png" 
        title="About The Commissioner" 
      />
      <section className="w-full flex flex-col gap-4">
        <FeaturedInitiatives />
        {/* <FeaturedPartners /> */}
        <QuickLinks />
        {/* <Advertisement /> */}
      </section>
      <CTASection 
        heading="Need Assistance with Civil Service Matters?"
        subtext="Get help with appointments, promotions, pensions, and other civil service services."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer/>
    </div>
  );
}
