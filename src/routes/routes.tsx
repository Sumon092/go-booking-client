import App from '../App';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import {createBrowserRouter} from 'react-router-dom'
import Booking from '../pages/Booking';
import Profile from '../component/Profile';
import Dashboard from '../layout/Dashboard';
import ManageUser from '../component/Dashboard/ManageUser';
import ManageBooking from '../component/Dashboard/ManageBooking';
import ManageService from '../component/Dashboard/ManageService';
import ServiceHistory from '../component/Dashboard/ServiceHistory';
import { getUserInfo } from '../services/authService';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const {role}=getUserInfo() as any
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/bookings',
        element: <Booking />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element:<Dashboard/>,
    children: [
      {
        path: `${role}/profile`,
        element: <Profile />,
      },
      {
        path: `${role}/manage-user`,
        element: <ManageUser />,
      },
      {
        path: `${role}/manage-booking`,
        element: <ManageBooking />,
      },
      {
        path: `${role}/manage-service`,
        element: <ManageService />,
      },
      {
        path: `${role}/service-history`,
        element: <ServiceHistory />,
      },
      
    ]
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
