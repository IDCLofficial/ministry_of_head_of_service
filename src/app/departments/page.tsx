import UnitsHeroSection from "./UnitsHeroSection";
import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export default function DepartmentsPage() {
  return (
    <div className="bg-white">
      <UnitsHeroSection />
      <UnitsTabsSection />
      <CTASection heading="Need Assistance with Civil Service Departments?" subtext="Learn more about our specialized departments and how they serve the public." buttonLabel="Contact Us" buttonHref="/contact-us"/>
      <Footer />
    </div>
  );
}
