import { useActiveSection } from "./hooks/usePortfolio";
import portfolioData from "./data/portfolioData";

import Navbar          from "./components/Navbar";
import Hero            from "./components/Hero";
import MetricsBanner   from "./components/MetricsBanner";
import Skills          from "./components/Skills";
import Experience      from "./components/Experience";
import Projects        from "./components/Projects";
import Certifications  from "./components/Certifications";
import Contact         from "./components/Contact";
import Footer          from "./components/Footer";

const SECTION_IDS = ["about", "skills", "experience", "projects", "certifications", "contact"];

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div style={{ background: "#0A0F1E", minHeight: "100vh", color: "#E8EAF0" }}>
      <Navbar activeSection={activeSection} />

      <Hero           data={portfolioData} />
      <MetricsBanner  metrics={portfolioData.metrics} />
      <Skills         skills={portfolioData.skills} />
      <Experience     experience={portfolioData.experience} />
      <Projects       projects={portfolioData.projects} />
      <Certifications
        certifications={portfolioData.certifications}
        education={portfolioData.education}
        achievements={portfolioData.achievements}
      />
      <Contact        data={portfolioData} />
      <Footer />
    </div>
  );
}
