import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useIsMobile } from "../Utils/Utils";
import { useState, useEffect } from "react";

interface propType {
  children: React.ReactNode;
}

const Layout: React.FC<propType> = ({ children }) => {
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleModalState = () => {
      const modal = document.getElementById("quiz-modal");
      setIsModalOpen(!!modal);
    };

    handleModalState();

    const observer = new MutationObserver(handleModalState);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {!(isMobile && isModalOpen) && <Header />}
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
