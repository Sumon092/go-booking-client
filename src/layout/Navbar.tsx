import { Button } from "antd";
import "../styles/Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="text-white flex justify-between items-center h-[60px] pr-24 pl-24 navbar">
            <h2 className="text-4xl font-bold">Go</h2>
            <div className="flex gap-2 items-center">
                <Link to="/dashboard">
                <h3>Dashboard</h3>
                </Link>
                
                <Link className="no-underline" to="/register">
                <Button className="text-lg font-bold flex justify-center items-center text-[#4ca2cd] w-24 h-10 ">Register</Button>
                </Link>
                
               <Link className="no-underline" to="/sign-in">
               <Button className="text-lg font-bold flex justify-center items-center text-[#4ca2cd]   w-24 h-10">Sign in</Button>
               </Link>
            </div>
        </div>
    );
};

export default Navbar;