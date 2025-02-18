import { useEffect, useState } from "react";
import Loader from "../../components/Loader/loader";
import HeroSection from "./HeroSection"

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
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
      </div>
    </>
  );
};

export default Home;
