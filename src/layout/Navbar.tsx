import { Button } from "antd";
import "../styles/Navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { getUserInfo, removeUserInfo } from "../services/authService";
import { authKey } from "../constants/authKey";
import { useAppDispatch } from "../redux/hook";
import { logout } from "../redux/features/auth/authSlice";
const Navbar = () => {
    
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    const handleLogout=()=>{
        removeUserInfo(authKey)
        dispatch(logout)
        navigate('/')
    }
    const {role}=getUserInfo() as { role: string };
    return (
        <div className="text-white flex justify-between items-center h-[60px] pr-24 pl-24 navbar">
            <h2 className="text-4xl font-bold">Go</h2>
            <div className="flex gap-2 items-center">
                {role&&<Link className="no-underline text-white uppercase font-bold mr-3" to="/dashboard">
                <h3>Dashboard</h3>
                </Link>}
                
                {role?<Link onClick={handleLogout} to='' className="no-underline">
               <Button className="text-lg font-bold flex justify-center items-center text-[#4ca2cd]   w-24 h-10">Sign out</Button>
               </Link>: <Link className="no-underline" to="/sign-in">
               <Button className="text-lg font-bold flex justify-center items-center text-[#4ca2cd]   w-24 h-10">Sign in</Button>
               </Link>}
                {!role&&<Link className="no-underline" to="/register">
                <Button className="text-lg font-bold flex justify-center items-center text-[#4ca2cd] w-24 h-10 ">Register</Button>
                </Link>}
                
              
            </div>
        </div>
    );
};

export default Navbar;