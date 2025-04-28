import { useEffect, useState } from "react"

type onScrollHandlerProp = {
  setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>
}

type subMenuStatePropType = {
  setSubMenuState: React.Dispatch<React.SetStateAction<boolean>>
}

export const onScrollHandler = ({ setIsScrolled }: onScrollHandlerProp) => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}

export const subMenuStateHandler = ({ setSubMenuState }: subMenuStatePropType) => {
  setSubMenuState(prev => !prev);
};


export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};


export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    if (id === "track-section" ) {
      const headerOffset = 100; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

