import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { MVSSection } from "./MVSSection";
import { AppLink } from "../components/AppLink";
import TeamGridSection from "./team/TeamGridSection";

const teamMembers = Array(4).fill({
    name: "Magreth Nonso",
    position: "Position",
    imgSrc: "/images/team.png" // Use a placeholder or real image if available
  });

export default function AboutUs() {
    return (
        <div className="h-screen">
            <AboutUsHero ministryName="Ministry of Head of Service" />
            <AboutSection 
                aboutText="The Imo State Ministry of Head of Service is the administrative hub of the civil service. It coordinates, supervises, and reforms civil service operations to ensure that government functions are executed by well-trained, professional, and ethically grounded personnel. The ministry drives public sector excellence by fostering a culture of discipline, merit, and accountability."
                imgSrc="/images/agriculture.jpg" 
                altText="Ministry of Sports and Youth Development conference event" 
            />
            <MVSSection />   
            <ObjectivesSection />
            <StructuresSection 
                imgSrc="/images/fed-sec.jpg"
            />
            <section className="w-full py-10 md:py-16 px-2 md:px-4 bg-white mx-auto flex flex-col items-center">
                <TeamGridSection members={teamMembers} />
                <AppLink href="/about-us/team/#team" label="Learn More" variant="primary" className="hover:bg-primary-green/80 transition-all duration-300"/>
            </section>
            <CTASection 
                heading="Partner with Us to Transform Agriculture in Imo State"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}