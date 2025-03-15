import { useState, useEffect } from "react";
import logo from "/assets/image/Logo Horizontal white 2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Loader = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 3000, 
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className={`loader ${loading ? "show" : "hide"}`}>
      <div className="count">
        <img loading="lazy" src={logo} alt="logo"  data-aos="flip-right"/>
        {count}%
      </div>
    </div>
  );
};

export default Loader;