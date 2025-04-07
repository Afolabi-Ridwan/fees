import HeroSection from "./HeroSection/HeroSection"
import AboutSection from "./AboutSection/AboutSection";
import WhoYouAreSection from "./WhoYouAreSection/WhoYouAreSection";
import QuizSection from "./QuizSection/QuizSection";
import FacultiesSection from "./FacultiesSection/components/FacultiesSection";
import CallToActionSection from "./CallToActionSection/CallToActionSection";
import FaqsSection from "./FaqsSection/FaqsSection";
import SlidingText from "./SlidingText/SlidingText";
import Layout from "../../components/Layout/Layout";
import QuizModal from "./QuizModal/QuizModal";

const Home = () => {





  return (
    <div className="w-full">
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

      <QuizModal  />
    </div>
  );
};

export default Home;