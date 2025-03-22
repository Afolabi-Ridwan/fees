import './index.css'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router'
import Recommendation from './pages/Recommendation/Recommendation'
import { ModalStateProvider } from './contexts/ModalContext'
function App() {

  return (
    <>
      <ModalStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/recommendationPage"} element={<Recommendation />} />
          </Routes>
        </BrowserRouter>
      </ModalStateProvider>
    </>
  )
}

export default App