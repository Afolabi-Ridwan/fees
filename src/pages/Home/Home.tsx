import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import HeroSection from "./HeroSection/HeroSection"
import AboutSection from "./AboutSection/AboutSection";
import WhoYouAreSection from "./WhoYouAreSection/WhoYouAreSection";
import QuizSection from "./QuizSection/QuizSection";
import FacultiesSection from "./FacultiesSection/FacultiesSection";
import CallToActionSection from "./CallToActionSection/CallToActionSection";
import FaqsSection from "./FaqsSection/FaqsSection";


const Home = () => {

  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingComplete(true);
    }, 12000);
  }, []);

  return (
    <div className="w-full">
      {!loadingComplete ? <Loader /> : null}

      <HeroSection />
      <div className="relative z-10 bg-white">
        <AboutSection />
      </div>
      <WhoYouAreSection />
      <QuizSection/>
      <FacultiesSection/>
      <CallToActionSection/>
      <FaqsSection/>
    </div>
  );
};

export default Home;