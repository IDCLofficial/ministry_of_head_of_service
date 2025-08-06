import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { MVSSection } from "./MVSSection";
import TeamGridSection from "./TeamGridSection";
import { teamMembers } from "./TeamMembers";

export default function AboutUs() {
    return (
        <div className="h-screen">
            <AboutUsHero ministryName="Ministry of Head of Service" />
            <AboutSection 
                aboutText="The Imo State Ministry of Head of Service is the administrative hub of the civil service. It coordinates, supervises, and reforms civil service operations to ensure that government functions are executed by well-trained, professional, and ethically grounded personnel. The ministry drives public sector excellence by fostering a culture of discipline, merit, and accountability."
                imgSrc="/images/no_corruption.jpg" 
                altText="Ministry of Sports and Youth Development conference event" 
            />
            <MVSSection />   
            <TeamGridSection members={teamMembers} />
            <ObjectivesSection />
            <StructuresSection 
                imgSrc="/images/fed-sec.jpg"
            />
            <CTASection 
                heading="Learn More About the Ministry of Head of Service"
                subtext="Discover our mission, vision, and commitment to civil service excellence in Imo State."
                buttonLabel="Contact Us"
                buttonHref="/contact-us"
            />
            <Footer />
        </div>
    )
}