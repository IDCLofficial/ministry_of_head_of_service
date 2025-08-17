import ProjectHeroSection from "./ProjectHeroSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import ProjectsSection from "./ProjectsSection";
import { getProject } from "./projects";
import { Project } from "../../../lib/types";

export default async function ProjectsPage() {
  const projects = await getProject()

  return (
    <div className="bg-white">
      <ProjectHeroSection />
      <ProjectsSection projects={projects as unknown as Project[]} />
      <CTASection 
        heading="Need Assistance with Civil Service Matters?"
        subtext="Get help with appointments, promotions, pensions, and other civil service services."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}