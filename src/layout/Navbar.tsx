import { Button } from "antd";
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <div className="text-white flex justify-between items-center h-[60px] pr-24 pl-24 navbar">
            <h2 className="text-4xl font-bold">Go</h2>
            <div className="flex gap-2 items-center">
                <h3>Dashboard</h3>
                <Button className="text-lg font-bold flex justify-center items-center text-[#4ca2cd] w-24 h-10">Register</Button>
                <Button className="text-lg font-bold flex justify-center items-center text-[#4ca2cd]   w-24 h-10">Sign in</Button>
            </div>
        </div>
    );
};

export default Navbar;