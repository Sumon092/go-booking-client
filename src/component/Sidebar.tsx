import { Menu,Layout, Button } from "antd";
const {  Sider } = Layout;

import {useState}from 'react'


import { sidebarItems } from "./SidebarItems";
import { getUserInfo } from "../services/authService";
import { Link } from "react-router-dom";


  const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {role}=getUserInfo() as any
    
    
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={230}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'sticky',
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div style={{
                color:'white',
                fontSize:'1.5rem',
                textAlign:'center',
                fontWeight:'bold',
                marginBottom:'1rem'
            }}><Link className="no-underline cursor-pointer" to="/">
            <Button className="text-3xl font-bold cursor-pointer bg-black text-white">Go</Button>
            </Link></div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} />
        </Sider>
    );
};

export default SideBar;


