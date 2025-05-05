import { useEffect, useState } from "react";

const sections = [
  { id: "hero-section", label: "Home" },
  { id: "about-section", label: "About FLA" },
  { id: "track-section", label: "Find your track" },
  { id: "faculty-section", label: "Faculty" },
  { id: "faq-section", label: "FAQ" },
];

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("hero-section");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; 

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sections[i].id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
};
