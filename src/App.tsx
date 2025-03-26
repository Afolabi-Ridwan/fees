import './index.css'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router'
import Recommendation from './pages/Recommendation/Recommendation'
import { ModalStateProvider } from './contexts/ModalContext'
import RegistrationForm from './pages/Forms/Registration/Registration'
import RegistrationSuccess from './pages/RegistrationSuccess/RegistrationSuccess'
import SubscriptionForm from './pages/Forms/Subscription/Subscription'
function App() {

  return (
    <>
      <ModalStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/recommendation-page"} element={<Recommendation />} />
            <Route path={"/registration-page"} element={<RegistrationForm />} />
            <Route path={"/registration-success"} element={<RegistrationSuccess />} />
            <Route path={"/subscription-page"} element={<SubscriptionForm />} />
            
          </Routes>
        </BrowserRouter>
      </ModalStateProvider>
    </>
  )
}

export default App