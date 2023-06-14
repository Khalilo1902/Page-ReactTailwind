 import logo from '../assets/logo.png'
import { FaBars } from 'react-icons/fa'
 const Header = () =>{
return (
    <header className= "w-[100%]">

    
        <div className="container flex items-center justify-between py-5 w-[80%] ">

    <img src={logo} alt="" />

    <nav className= "hidden lg:flex items-center gap-7">
        <ul className="flex items-center justify-between  text-red-400 gap-9">
            <li className="list">Pricing</li>
            <li className="list">Produkt</li>
            <li className="list">About as</li>
            <li className="list">Careers</li>
            <li className="list">Community</li>
        </ul>
     
    </nav>

    <a href="#"><span className="px-8 py-3 bg-red-700 rounded-xl  hidden lg:flex">Get Startet</span></a>
    <FaBars className="flex lg:hidden "/>
        </div>
    </header>
);

}
export default Header