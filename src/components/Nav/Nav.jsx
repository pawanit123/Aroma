import { CiSearch } from "react-icons/ci"
import { FaCartPlus } from "react-icons/fa";
import { NavbarMenu } from "../../mockData/data"
import { FaDumbbell } from "react-icons/fa"
import ResponsiveMenu from "./components/ResponsiveMenu/ResponsiveMenu"
const Nav = () => {
    // eslint-disable-next-line no-undef
    const [, setCount]=React.useState(false)
  return (
    <>
     <nav>
        <div className="container flex justify-between items-center py-8">
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                <FaDumbbell />
                <p>coders</p>
                <p className="text-secondary">Gym</p>
            </div>
            {/* Menu section */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-6 text-gray-600">
                    {NavbarMenu.map((item)=>{
                        return <li key={item.id}>
                            <a href={item.link} className="inline-block py-1 px-3 hover:text-primary font-semibold">{item.title}</a></li>
                    })}
                </ul>
            </div>
            {/* icons */}
            <div className="flex items-center gap-4">
                <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                    <CiSearch/>
                </button>
                <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <FaCartPlus />
                </button>
                <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200 hidden md:block">
                    Login
                </button>
            </div>
            {/* mobile menu section */}
              <div className="md:hidden" onClick={()=>setCount(!open)}>
                <MdMenu className="text-4xl"/>
                </div>  
        </div>
     </nav>
     {/* mobile sidebar  */}
<ResponsiveMenu/></>
  )
}

export default Nav
