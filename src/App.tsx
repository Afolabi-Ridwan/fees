import "./index.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recommendation from "./pages/Recommendation/Recommendation";
import { ModalStateProvider } from "./contexts/ModalContext";
import RegistrationForm from "./pages/Forms/Registration/Registration";
import RegistrationSuccess from "./pages/RegistrationSuccess/RegistrationSuccess";
import SubscriptionForm from "./pages/Forms/Subscription/Subscription";
// import Loader from "./components/Loader/Loader";
// import { useEffect, useState } from "react";

function App() {
  // const [loadingComplete, setLoadingComplete] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoadingComplete(true);
  //   }, 5000);
  // }, []);

  return (
    <>

      {/* {!loadingComplete && (
        <div className="loader-container">
          <Loader />
        </div>
      )} */}

      <ModalStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommendation-page" element={<Recommendation />} />
            <Route path="/registration-page" element={<RegistrationForm />} />
            <Route path="/registration-success/:trackPrice" element={<RegistrationSuccess />} />
            <Route path="/subscription-page" element={<SubscriptionForm />} />
          </Routes>
        </BrowserRouter>
      </ModalStateProvider>
    </>
  );
}

export default App;
