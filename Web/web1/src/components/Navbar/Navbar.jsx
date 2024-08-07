import Logo from "../../assets/react.svg"

const navbar = () => {
  return (
    <div>
        {/* upper navbar */}
        <div>
            <div>
                <div>
                    <a href="#" className=' '>
                        <img src={Logo} alt="Logo" /> React
                    </a>
                </div>
                {/*  */}
                <div>
                    <div>
                        <input 
                        type="text" 
                        placeholder='search' 
                        className = "w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"/>
                    </div>
                </div>
            </div>
        </div>
        {/* lower navbar */}
        <div></div>
    </div>   
  );
};

export default navbar;