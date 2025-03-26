import spiralPattern from "../../../public/assets/image/Vector 14.png"
import spiralPatternOne from "../../../public/assets/image/Vector 15.png"
import Footer from "../Footer/Footer"
import PagesHeader from '../Header/PagesHeader'

const ConversionLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="pt-[130px] relative ">
            <img src={spiralPattern} alt="spiralPattern" className="absolute top-0 w-[550px] max-lg:w-[500px] max-md:top-16 max-md:w-[300px] max-sm:w-[250px] max-md:translate-x-[-50px]" />
            <img src={spiralPatternOne} alt="spiralPatternOne" className="absolute top-0 w-[470px] max-lg:w-[400px] max-md:top-16 max-md:h-24 max-md:w-[270px] max-sm:w-[200px] right-0 " />
            <PagesHeader />
            {children}
            <Footer />
        </div>
    )
}

export default ConversionLayout
