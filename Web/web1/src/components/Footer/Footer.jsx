import footerLogo from "../../assets/react.svg"
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mb-20">
        <div className="container">
            <div data-aos="zoom-in" className="grid md:grid-cols-3 pv-44 pt-5 ">
                {/* company details */}
                <div className="py-8 px-4">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                        <img src={footerLogo} alt="" className="max-w-[50px]" />NOI</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis esse deleniti laboriosam dicta autem, ab nihil pariatur cupiditate eveniet, unde porro, vel veritatis dolore culpa eos iste totam nobis?</p>
                </div>
                {/* Footer Links */}
                <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div>
                            <div className="py-8 px-8">
                                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 m-auto">
                                    Important Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {   
                                        FooterLinks.map((link)=>(
                                            <li className="cursor-pointer hover:text-secondary hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                                                <span>{link.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="py-8 px-4 ml-16 lg:ml-20">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                {FooterLinks.map((link) => (
                                    <li
                                    className="cursor-pointer hover:text-secondary hover:translate-x-1 duration-300 text-gray-200"
                                    key={link.title}
                                    >
                                    <span>{link.title}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        {/* social link */}
                        <div className="ml-10 lg:ml-20">
                            <div className="flex items-center gap-3 mt-9 ">
                                <a href="#">
                                <FaInstagram className="text-3xl" />
                                </a>
                                <a href="#">
                                <FaFacebook className="text-3xl" />
                                </a>
                                <a href="#">
                                <FaLinkedin className="text-3xl" />
                                </a>
                            </div>
                            <div className="mt-6 ">
                                <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>Noida, Uttar Pradesh</p>
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt />
                                <p>+91 123456789</p>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer