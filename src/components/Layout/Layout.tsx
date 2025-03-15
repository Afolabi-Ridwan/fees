import Footer from '../Footer/Footer'
import Header from '../Header/Header'

interface propType {
  children: React.ReactNode
}

const Layout: React.FC<propType> = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
