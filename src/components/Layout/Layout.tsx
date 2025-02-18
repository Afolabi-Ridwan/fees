import Header from '../Header/Header'

interface propType {
    children: React.ReactNode
}

const Layout: React.FC<propType> = ({children}) => {
  return (
    <>
        <Header/>
      {children}
    </>
  )
}

export default Layout
