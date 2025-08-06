import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ServicesHeroSection from "./ServicesHeroSection";
import ServicesSection from "./ServicesSection";

export default function ServicesPage() {
    return (
        <div className="bg-white">
            <ServicesHeroSection />
            <ServicesSection />
            <CTASection heading="Need Assistance with Civil Service Services?" subtext="Get help with appointments, promotions, pensions, and other civil service services." buttonLabel="Contact Us" buttonHref="/contact-us" />
            <Footer />
        </div>
    );
}