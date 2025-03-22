import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import HeroSection from "./HeroSection/HeroSection"
import AboutSection from "./AboutSection/AboutSection";
import WhoYouAreSection from "./WhoYouAreSection/WhoYouAreSection";
import QuizSection from "./QuizSection/QuizSection";
import FacultiesSection from "./FacultiesSection/FacultiesSection";
import CallToActionSection from "./CallToActionSection/CallToActionSection";
import FaqsSection from "./FaqsSection/FaqsSection";
import SlidingText from "./SlidingText/SlidingText";
import Layout from "../../components/Layout/Layout";
import QuizModal from "./QuizModal/QuizModal";

const Home = () => {

  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingComplete(true);
    }, 12000);
  }, []);



  return (
    <div className="w-full">
      {!loadingComplete ? <Loader /> : null}
        <Layout >
          <HeroSection />
          <div className="relative z-10 bg-white">
            <AboutSection />
          </div>
          <WhoYouAreSection />
          <QuizSection />
          <FacultiesSection />
          <CallToActionSection />
          <FaqsSection />
          <SlidingText />
        </Layout>

      <QuizModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;