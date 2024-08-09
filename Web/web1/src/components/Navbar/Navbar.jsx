import Logo from "../../assets/react.svg"
import { MdSearch } from "react-icons/md";

const navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white  duration-200 relative z-40">
        {/* upper navbar */}
        <div className="bg-primary/70 py-2">
            <div className="container flex justify-between items-center ">
                <div>
                    <a href="#" className=' font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img src={Logo} alt="Logo" className="w-10"/> 
                        React
                    </a>
                </div>
                {/* Search bar */}
                <div>
                    <div className="relative group hidden sm:block">
                        <input 
                        type="text" 
                        placeholder='Search' 
                        className = "w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary text-black"/>
                        <MdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"/>
                    </div>
                </div>
                {/* order Navbar */}
                <button onClick={()=> alert("This feature is currently not available")}>
                    <span>Order</span>
                </button>
            </div>
        </div>
        {/* lower navbar */}
        <div></div>
    </div>   
  );
};

export default navbar;