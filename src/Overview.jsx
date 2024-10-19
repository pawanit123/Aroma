
import Blogs from "./components/Blogs/Blogs"
import Cards from "./components/Cards/Cards"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
// import Navbar from'./components/Navbar/Navbar'
import Test from'./components/Test/Test'
const Overview = () => {
  return (
    <>
     <div className="bg-slate-900">

   <Hero/>
   <Cards/>
   <Blogs/>
   <Test/>
 
   <Footer/>
   </div> 
    </>
  )
}

export default Overview
