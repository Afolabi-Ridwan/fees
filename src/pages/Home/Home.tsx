import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import HeroSection from "./HeroSection/HeroSection"
import AboutSection from "./AboutSection/AboutSection";
import WhoYouAreSection from "./WhoYouAreSection/WhoYouAreSection";

const Home = () => {

  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingComplete(true);
    }, 12000);
  }, []);

  return (
    <>
      {!loadingComplete ? <Loader /> : null}

      <HeroSection />
      <div className="relative z-10 bg-white">
        <AboutSection />
      </div>
      <WhoYouAreSection />
    </>
  );
};

export default Home;