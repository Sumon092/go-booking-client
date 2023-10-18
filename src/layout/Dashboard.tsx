import  { useEffect, useState } from 'react';
import { Layout } from 'antd';


import SideBar from '../component/Sidebar';
import { isLoggedIn } from '../services/authService';
import Contents from '../component/Contents';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const userLoggedIn = isLoggedIn();
  
  useEffect(() => {
    setLoading(true);

    // if (!userLoggedIn) {
    //   window.location.href = '/';
    // }
  }, [userLoggedIn]);

  if (!loading) {
    return <p>Loading....</p>;
  }

  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{<Outlet/>}</Contents>
    </Layout>
  );
};

export default Dashboard;
